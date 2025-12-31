const { hasPermission } = require('../utils');

function convertWhere(where = {}) {
  const out = {};

  for (const [key, value] of Object.entries(where)) {
    if (value == null) continue;

    if (key === 'OR' && Array.isArray(value)) {
      out.OR = value.map(convertWhere);
      continue;
    }

    if (key === 'AND' && Array.isArray(value)) {
      out.AND = value.map(convertWhere);
      continue;
    }

    if (key.endsWith('_contains')) {
      const field = key.replace('_contains', '');
      out[field] = { contains: value, mode: 'insensitive' };
      continue;
    }

    out[key] = value; // e.g. category: "backpacks"
  }

  return out;
}

const Query = {
  async products(parent, args, ctx) {
    const prismaWhere = convertWhere(args.where || {});
    return ctx.db.product.findMany({
      where: prismaWhere,
      skip: args.skip ?? undefined,
      take: args.first ?? undefined,
      include: { user: true },
    });
  },
  async product(parent, args, ctx, info) {
    return ctx.db.product.findUnique({
      where: args.where,
      include: {
        user: true,
      },
    });
  },
  async productsConnection(parent, args, ctx) {
    const prismaWhere = convertWhere(args.where || {});
    const count = await ctx.db.product.count({ where: prismaWhere });
    return { aggregate: { count } };
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
  }
};

module.exports = Query;
