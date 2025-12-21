#!/bin/bash
set -e

npm install
npx prisma generate --schema=./prisma/schema.prisma
npx prisma db push --schema=./prisma/schema.prisma
