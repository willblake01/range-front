# Prisma 1 to Prisma 2 Migration Guide

## What Changed

### Architecture

- ❌ Prisma 1: Required separate Prisma server
- ✅ Prisma 2: Direct database connection (no server needed!)

### Files Updated

1. **New**: `prisma/schema.prisma` - Replaces `datamodel.graphql` and `prisma.yml`
2. **Updated**: `package.json` - New scripts for Prisma 2
3. **Updated**: `src/db.js` - Now uses `@prisma/client` instead of `prisma-binding`
4. **Updated**: `.env` - Uses `DATABASE_URL` instead of `PRISMA_ENDPOINT`

## Setup Steps

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Generate Prisma Client

```bash
npm run prisma:generate
```

### 3. Push Schema to Database

```bash
npm run prisma:push
```

This creates all tables in your PostgreSQL database.

### 4. Start Development Server

```bash
npm run dev
```

## API Changes (Important!)

Prisma 2 has a completely different API than Prisma 1. Here are the main differences:

### Prisma 1 (Old)

```javascript
const user = await db.query.user({ where: { id: userId } }, info);
const users = await db.query.users({}, info);
await db.mutation.createUser({ data: { ...userData } });
await db.mutation.updateUser({ where: { id }, data: { ...updates } });
await db.mutation.deleteUser({ where: { id } });
```

### Prisma 2 (New)

```javascript
const user = await prisma.user.findUnique({ where: { id: userId } });
const users = await prisma.user.findMany();
await prisma.user.create({ data: { ...userData } });
await prisma.user.update({ where: { id }, data: { ...updates } });
await prisma.user.delete({ where: { id } });
```

## Resolver Updates Needed

Your resolvers in `Mutation.js` and `Query.js` need to be updated to use the new API.

### Common Patterns

**Find One:**

```javascript
// Old
db.query.product({ where: { id } }, info)

// New  
prisma.product.findUnique({ 
  where: { id },
  include: { user: true } // if you need relations
})
```

**Find Many:**

```javascript
// Old
db.query.products({ where: { title_contains: searchTerm } }, info)

// New
prisma.product.findMany({
  where: { title: { contains: searchTerm } },
  include: { user: true }
})
```

**Create:**

```javascript
// Old
db.mutation.createProduct({ data: { ...productData } }, info)

// New
prisma.product.create({
  data: { ...productData }
})
```

**Update:**

```javascript
// Old
db.mutation.updateProduct({ where: { id }, data: updates }, info)

// New
prisma.product.update({
  where: { id },
  data: updates
})
```

**Delete:**

```javascript
// Old
db.mutation.deleteProduct({ where: { id } }, info)

// New
prisma.product.delete({
  where: { id }
})
```

## Deployment to Render

### Build Command

```bash
npm install && npx prisma generate --schema=./prisma/schema.prisma && npx prisma db push --schema=./prisma/schema.prisma
```

### Start Command

```bash
npm start
```

### Environment Variables (Render)

```yaml
DATABASE_URL=postgresql://rangefrontadmin:DIInvZQJx3aaSGXtzfVT4u5utZxJXHUN@dpg-d53ndakhg0os738vt3gg-a.oregon-postgres.render.com/rangefront
FRONTEND_URL=https://your-app.vercel.app
APP_SECRET=Shaboopy
STRIPE_SECRET=sk_test_OH63QANsfLtddjDsbkWH122t
PORT=4444
```

## Next Steps

I've created the foundation. Now we need to update the resolvers. This is manual work because the APIs are very different. Would you like me to:

1. Update ALL resolvers automatically (I'll do my best)
2. Update them one-by-one as you test
3. Show you examples and you update them yourself

Let me know how you'd like to proceed!
