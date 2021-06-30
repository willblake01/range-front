const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  products: forwardTo('db'),
  product: forwardTo('db'),
  productsConnection: forwardTo('db'),
  user(parent, args, ctx, info) {
    // Check if there is a current user ID
    if(!ctx.req.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.req.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // 1. Check if they're logged in
    if(!ctx.req.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has permissions to query
    hasPermission(ctx.req.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // 3. If they do, query all the users
    return ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    // 1. Make sure they are logged in
    if(!ctx.req.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id },
      },
      info
    );
    // 3. Check if they have permissions to see this order
    const ownsOrder = order.user.id === ctx.req.userId;
    const hasPermissionToSeeOrder = ctx.req.user.permissions.includes('ADMIN');
    if(!ownsOrder || !hasPermission) {
      throw new Error('You can\'t see this bud');
    }
    // 4. Return the order
    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.req;
    if(!userId) {
      throw new Error('You must be signed in!');
    }
    return ctx.db.query.orders(
      {
        where: {
          user: { id: userId },
        },
      },
    info
    );
  },
  async tents(parent, args, ctx, info) {
    return ctx.db.query.products(
      {
        where: { category: 'tents' },
      },
    info
    );
  },
  async sleepingBags(parent, args, ctx, info) {
    return ctx.db.query.products(
      {
        where: { category: 'sleeping-bags' },
      },
      info
    );
  },
  async backpacks(parent, args, ctx, info) {
    return ctx.db.query.products(
      {
        where: { category: 'backpacks' },
      },
      info
    );
  },
};

module.exports = Query;
