const { hasPermission } = require('../utils');

const Query = {
  async products(parent, args, ctx, info) {
    return ctx.db.product.findMany({
      skip: args.skip,
      take: args.first,
      include: {
        user: true,
      },
    });
  },
  async product(parent, args, ctx, info) {
    return ctx.db.product.findUnique({
      where: { id: args.where.id },
      include: {
        user: true,
      },
    });
  },
  async productsConnection(parent, args, ctx, info) {
    const where = args.where || {};
    const aggregate = await ctx.db.product.aggregate({
      _count: true,
      where: where.AND ? {
        OR: where.AND.map(condition => {
          if (condition.title_contains) {
            return { title: { contains: condition.title_contains, mode: 'insensitive' } };
          }
          if (condition.description_contains) {
            return { description: { contains: condition.description_contains, mode: 'insensitive' } };
          }
          return condition;
        })
      } : {},
    });
    
    return {
      aggregate: {
        count: aggregate._count,
      },
    };
  },
  async user(parent, args, ctx, info) {
    // Check if there is a current user ID
    if(!ctx.req.userId) {
      return null;
    }
    return ctx.db.user.findUnique({
      where: { id: ctx.req.userId },
      include: {
        cart: {
          include: {
            item: true,
          },
        },
      },
    });
  },
  async users(parent, args, ctx, info) {
    // 1. Check if they're logged in
    if(!ctx.req.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has permissions to query
    hasPermission(ctx.req.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // 3. If they do, query all the users
    return ctx.db.user.findMany();
  },
  async order(parent, args, ctx, info) {
    // 1. Make sure they are logged in
    if(!ctx.req.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Query the current order
    const order = await ctx.db.order.findUnique({
      where: { id: args.id },
      include: {
        user: true,
        items: true,
      },
    });
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    // 3. Check if they have permissions to see this order
    const ownsOrder = order.user.id === ctx.req.userId;
    const hasPermissionToSeeOrder = ctx.req.user.permissions.includes('ADMIN');
    if(!ownsOrder && !hasPermissionToSeeOrder) {
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
    return ctx.db.order.findMany({
      where: {
        userId: userId,
      },
      include: {
        items: true,
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },
  async tents(parent, args, ctx, info) {
    return ctx.db.product.findMany({
      where: { category: 'tents' },
      include: {
        user: true,
      },
    });
  },
  async sleepingBags(parent, args, ctx, info) {
    return ctx.db.product.findMany({
      where: { category: 'sleeping-bags' },
      include: {
        user: true,
      },
    });
  },
  async backpacks(parent, args, ctx, info) {
    return ctx.db.product.findMany({
      where: { category: 'backpacks' },
      include: {
        user: true,
      },
    });
  },
};

module.exports = Query;
