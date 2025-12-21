// Load environment variables
require('dotenv').config({ path: '.env' });

// The prisma server
const db = require('../src/db');

// The data to seed in the database
const { users, products } = require('./seed.ts');

const seedDB = async () => {
  try {
    console.log('🌱 Starting database seed...');
    
    // Create the admin user
    console.log('Creating admin user...');
    const seedUser = await db.mutation.createUser({
      data: users[0]
    });
    console.log(`✅ Created user: ${seedUser.email}`);
    
    // Create all products
    console.log(`Creating ${products.length} products...`);
    for (const product of products) {
      const createdProduct = await db.mutation.createProduct({
        data: product
      });
      console.log(`✅ Created: ${createdProduct.title}`);
    }
    
    console.log('🎉 Database seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
};

seedDB();
