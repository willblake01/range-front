// Load environment variables
require('dotenv').config({ path: '.env' });

// The prisma server
const db = require('../src/db');

// The data to seed in the database
const { users, products } = require('./seed.ts');

const seedDB = async () => {
  try {
    console.log('🌱 Starting database seed...');
    
    // Create or update the admin user
    console.log('Upserting admin user...');
    const seedUser = await db.user.upsert({
      where: { email: users[0].email },
      update: {
        permissions: users[0].permissions
      },
      create: users[0]
    });
    console.log(`✅ Upserted user: ${seedUser.email} with permissions: ${seedUser.permissions.join(', ')}`);
    
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
