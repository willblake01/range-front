// Load environment variables
require('dotenv').config({ path: '.env' });

// The prisma server
const db = require('../src/db');

// The data to seed in the database
const { users, products } = require('./seed.ts');

const seedDB = async () => {
  try {
    console.log('🌱 Starting database seed...');
    
    // Create the admin user if it doesn't exist
    console.log('Creating admin user...');
    const existingUser = await db.user.findUnique({
      where: { email: users[0].email }
    });
    
    let seedUser;
    if (existingUser) {
      console.log(`⏭️  User already exists: ${existingUser.email}`);
      seedUser = existingUser;
    } else {
      seedUser = await db.user.create({
        data: users[0]
      });
      console.log(`✅ Created user: ${seedUser.email}`);
    }
    
    // Create products if they don't exist
    console.log(`Checking ${products.length} products...`);
    let createdCount = 0;
    let skippedCount = 0;
    
    for (const product of products) {
      const existing = await db.product.findFirst({
        where: { title: product.title }
      });
      
      if (existing) {
        skippedCount++;
      } else {
        await db.product.create({
          data: product
        });
        createdCount++;
        console.log(`✅ Created: ${product.title}`);
      }
    }
    
    console.log(`🎉 Database seeding completed! Created ${createdCount} products, skipped ${skippedCount} existing.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
};

seedDB();
