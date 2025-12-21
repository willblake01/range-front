#!/bin/bash
set -e

npm install
npx prisma generate --schema=./prisma/schema.prisma
npx prisma db push --schema=./prisma/schema.prisma

# Run seed if RUN_SEED environment variable is set to true
if [ "$RUN_SEED" = "true" ]; then
  echo "Running database seed..."
  npm run seed
fi
