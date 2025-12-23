const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');
const stripe = require('../stripe');

const isProd = process.env.NODE_ENV === 'production';

const buildCookieOptions = ({ maxAge } = {}) => {
  return {
    httpOnly: true,
    ...(maxAge ? { maxAge } : {}),
    path: '/',
    sameSite: isProd ? 'lax' : 'lax',
    secure: isProd
  };
};

const Mutations = {
  async createProduct(parent, args, ctx, info) {

    // Check if they are logged in
    if(!ctx.req.userId) {
      throw new Error('You must be logged in to do that!');
    }

    const product = await ctx.db.product.create({
      data: {

        // This is how we create a relationship between the item and the user
        user: {
          connect: {
            id: ctx.req.userId,
          }
        },
        ...args,
      },
      include: {
        user: true,
      },
    });

    return product;
  },

  async updateProduct(parent, args, ctx, info) {

    // First take a copy of the updates
    const updates = { ...args };

    // Remove the ID from the updates
    delete updates.id;

    // Run the update method
    return ctx.db.product.update({
      data: updates,
      where: {
        id: args.id,
      },
      include: {
        user: true,
      },
    });
  },

  async deleteProduct(parent, args, ctx, info) {
    const where = { id: args.id };

    // 1. Find the product
    const product = await ctx.db.product.findUnique({
      where,
      include: {
        user: true,
      },
    });

    // 2. Check if they own that product, or have permissions
    const ownsProduct = product.user.id === ctx.req.userId;
    const hasPermissions = ctx.req.user.permissions.some(permission =>
      ['ADMIN', 'ITEMDELETE'].includes(permission)
    );
    if(!ownsProduct && !hasPermissions) {
      throw new Error('You don\'t have the required permissions to do that!');
    }

    // 3. Delete it!
    return ctx.db.product.delete({ where });
  },

  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();

    // Hash the password
    const password = await bcrypt.hash(args.password, 10);
    
    // Create the user in the database
    const user = await ctx.db.user.create({
      data: {
        ...args,
        password,
        permissions: ['USER'],
      },
    });

    // Create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // Set the JWT as a cookie on the response
    ctx.res.cookie('token', token, buildCookieOptions({ maxAge: 1000 * 60 * 60 * 24 * 7 }));

    // Return the user to the browser
    return user;
  },

  async login(parent, { email, password }, ctx, info) {
    email = email.toLowerCase().trim();
    
    // 1. Check if there is a user with that email
    const user = await ctx.db.user.findUnique({ where: { email }});

    if(!user) throw new Error(`No user found for email ${email}`);

    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);

    if(!valid) throw new Error('Invalid Password');

    // 3. Generate the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    // 4. Set the cookie with the token
    ctx.res.cookie('token', token, buildCookieOptions({ maxAge: 1000 * 60 * 60 * 24 * 7 }));
  
    // 5. Return the user
    return user;
  },
  
  signout(parent, args, ctx, info) {
    ctx.res.clearCookie('token', buildCookieOptions());

    return { message: 'Goodbye!' };
  },

  async requestReset(parent, args, ctx, info) {
    args.email = args.email.toLowerCase().trim();

    // 1. Check if this is a real user
    const user = await ctx.db.user.findUnique({ where: { email: args.email} });

    if(!user) throw new Error(`No user found for email ${args.email}`);

    // 2. Set a reset token and expiry on that user
    const randomBytesPromisified = promisify(randomBytes);
    const resetToken = (await randomBytesPromisified(20)).toString('hex');
    const resetTokenExpiry = String(Date.now() + 3600000); // 1 hour from now
    const res = await ctx.db.user.update({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });

    // 3. Email them that reset token
    // TEMP: Log reset token to console for development (disable email)
    console.log('🔑 Password Reset Token:', resetToken);
    console.log('🔗 Reset URL:', `${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}`);
    
    // TODO: Configure email in production
    // const mailRes = await transport.sendMail({
    //   from: 'willblakebooking@gmail.com',
    //   to: user.email,
    //   subject: 'Your Password Reset Token',
    //   html: makeANiceEmail(`Your Password Reset Token is Here!
    //   \n\n
    //   <a href='${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}'>Click here to reset</a>`
    //   ),
    // });
    
    // 4. Return the message

    return { message: 'Check your terminal for the reset link!' };
  },

  async resetPassword(parent, args, ctx, info) {

    // 1. Check if the passwords match
    if(args.password !== args.confirmPassword) {
      throw new Error('Your passwords don\'t match!');
    }

    // 2. Check if it's a valid reset token
    // 3. Check if it's expired
    const users = await ctx.db.user.findMany({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry: {
          gte: String(Date.now()),
        },
      },
    });

    const user = users[0];

    if(!user) throw new Error('This token is either invalid or expired!');

    // 4. Hash their new password
    const password = await bcrypt.hash(args.password, 10);

    // 5. Save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.user.update({
      where: { email: user.email},
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    // 6. Generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

    // 7. Set the JWT cookie
    ctx.res.cookie('token', token, buildCookieOptions({ maxAge: 1000 * 60 * 60 * 24 * 7 }));

    // 8. Return the new user
    return updatedUser;
  },
  async updatePermissions(parent, args, ctx, info) {

    // 1. Check if they are logged in
    if(!ctx.req.userId) {
      throw new Error('You must be logged in!');
    }

    // 2. Query the current user
    const currentUser = await ctx.db.user.findUnique({
      where: {
        id: ctx.req.userId,
      },
    });

    // 3. Check if they have permissions to do this
    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']
    );

    // 4. Update the permissions
    return ctx.db.user.update({
      data: {
        permissions: args.permissions,
      },
      where: {
        id: args.userId,
      },
    });
  },

  async addToCart(parent, args, ctx, info) {

    // 1. Make sure they are signed in
    const { userId } = ctx.req;
    if(!userId) {
      throw new Error('You must be signed in!');
    }

    // 2. Query the user's current cart
    const existingCartItems = await ctx.db.cartItem.findMany({
      where: {
        userId: userId,
        itemId: args.id,
      },
    });
    const existingCartItem = existingCartItems[0];

    // 3. Check if that item is already in their cart and increment by 1 if it is
    if(existingCartItem) {
      console.log('This item is already in their cart.');
      return ctx.db.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + 1 },
        include: {
          item: true,
        },
      });
    }

    // 4. If it's not, create a fresh cartItem for that user
    return ctx.db.cartItem.create({
      data: {
        user: {
          connect: { id: userId },
        },
        item: {
          connect: { id: args.id },
        },
      },
      include: {
        item: true,
      },
    });
  },
  
  async removeFromCart(parent, args, ctx, info) {

    // 1. Find the cart item
    const cartItem = await ctx.db.cartItem.findUnique({
      where: {
        id: args.id,
      },
      include: {
        user: true,
      },
    });

    // 2. Make sure we found an item
    if(!cartItem) throw new Error('No cartItem found!');

    // 3. Make sure they own that cart item
    if(cartItem.user.id !== ctx.req.userId) {
      throw new Error('Cheatin huhhhh?!');
    }

    // 4. Delete that cart item
    return ctx.db.cartItem.delete({
      where: {
        id: args.id
      },
    });
  },
  async createOrder(parent, args, ctx, info) {

    // 1. Query the current user and make sure they are signed in
    const { userId } = ctx.req;
    if(!userId) throw new Error('You must be signed in to complete this order.');
    const user = await ctx.db.user.findUnique({
      where: { id: userId },
      include: {
        cart: {
          include: {
            item: true,
          },
        },
      },
    });

    // 2. Recalculate the total for the price
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0
    );
    console.log('Going to charge for a total of', amount);
    
    // 3. Create the payment intent with stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: args.token,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      },
    });
    console.log('Payment Intent created:', paymentIntent.id);

    // 4. Convert the cartItems to orderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } },
      };
      delete orderItem.id;
      return orderItem;
    });

    // 5. Create the order
    const order = await ctx.db.order.create({
      data: {
        total: paymentIntent.amount,
        charge: paymentIntent.id,
        items: { create: orderItems },
        user: { connect: { id: userId } },
      },
      include: {
        items: true,
      },
    });

    // 6. Clean up - clear the user's cart, delete cartItems
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.cartItem.deleteMany({
      where: {
        id: { in: cartItemIds },
      },
    });

    // 7. Return the order to the client
    return order;
  },
};

module.exports = Mutations;
