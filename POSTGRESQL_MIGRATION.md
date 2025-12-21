# PostgreSQL Migration Guide

## Local Development Setup

### 1. Stop Current MySQL Docker Containers

```bash
cd backend
docker-compose down -v
```

### 2. Start PostgreSQL Containers

```bash
docker-compose up -d
```

### 3. Deploy Prisma Schema

```bash
prisma deploy
```

### 4. Seed Database (Optional)

```bash
npm run seed
# or
ts-node data/seedDatabase.js
```

### 5. Start Backend Server

```bash
npm run dev
```

## Deployment to Render

### Backend Setup

1. **Create PostgreSQL Database on Render**
   - Go to Render Dashboard
   - Click "New +" → "PostgreSQL"
   - Name: `range-front-db`
   - Choose Free tier
   - Click "Create Database"
   - Copy the "Internal Database URL" (starts with `postgresql://`)

2. **Create Web Service for Backend**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder as root directory
   - Settings:
     - Name: `range-front-backend`
     - Environment: `Node`
     - Build Command: `npm install && prisma deploy`
     - Start Command: `npm start`

3. **Set Environment Variables on Render**

   ```bash
   PRISMA_ENDPOINT=<your-render-postgres-internal-url>
   FRONTEND_URL=<your-vercel-url>
   APP_SECRET=Shaboopy
   PRISMA_SECRET=mysecretkey123
   STRIPE_SECRET=sk_test_OH63QANsfLtddjDsbkWH122t
   PORT=4444
   ```

### Frontend Setup (Vercel)

1. **Update config.js**
   - Already done - it uses environment variable

2. **Deploy to Vercel**
   - Connect GitHub repo
   - Set Root Directory to `frontend`
   - Add Environment Variable:

     ```bash
     NEXT_PUBLIC_BACKEND_URL=<your-render-backend-url>
     NEXT_PUBLIC_STRIPE_KEY=<your-stripe-publishable-key>
     ```

3. **Update Backend CORS**
   - On Render, update `FRONTEND_URL` to your Vercel URL

## Verification

1. Check Prisma is running:
   - Visit `<your-render-backend-url>/_status`

2. Test GraphQL endpoint:
   - Visit `<your-render-backend-url>`
   - GraphQL Playground should load

3. Test Frontend:
   - Visit your Vercel URL
   - Try creating a product, adding to cart, etc.

## Troubleshooting

### Database Connection Issues

- Ensure you're using the **Internal Database URL** from Render
- Format: `postgresql://user:password@host:5432/database`

### Prisma Deploy Fails

- Check that all environment variables are set
- Verify database connection string is correct

### CORS Errors

- Ensure `FRONTEND_URL` on backend matches your Vercel URL exactly
- No trailing slash in URLs

## Differences from MySQL

### What Changed

- Connector: `mysql` → `postgres`
- Port: `3306` → `5432`
- Docker image: `mysql:5.7` → `postgres:13`

### What Didn't Change

- Your GraphQL schema (datamodel.graphql)
- Your resolvers
- Your frontend code
- Your Prisma queries

Prisma abstracts the database differences!
