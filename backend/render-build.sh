#!/bin/bash
# Build script for Render deployment

echo "📦 Installing dependencies..."
npm install

echo "🔄 Deploying Prisma schema..."
npm run deploy:prod

echo "✅ Build complete!"
