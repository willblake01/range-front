// This file connects to the PostgreSQL database using Prisma Client
const { PrismaClient } = require('../generated/prisma-client');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

module.exports = prisma;
