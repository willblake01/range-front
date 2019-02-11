const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // Check if there is a current user ID
    if(!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // 1. Check if they're logged in
    if(!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has permissions to query
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // 3. If they do, query all the users
    return ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    // 1. Make sure they are logged in
    if(!ctx.request.userId) {
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
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes('ADMIN');
    if(!ownsOrder || !hasPermission) {
      throw new Error('You can\'t see this bud');
    }
    // 4. Return the order
    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
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
    return ctx.db.query.items(
      {
        where: { category: 'tents' },
      },
    info
    );
  },
  async sleepingBags(parent, args, ctx, info) {
    return ctx.db.query.items(
      {
        where: { category: 'sleeping-bags' },
      },
      info
    );
  },
  async backpacks(parent, args, ctx, info) {
    return ctx.db.query.items(
      {
        where: { category: 'backpacks' },
      },
      info
    );
  },
};

module.exports = Query;
