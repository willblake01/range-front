const bcrypt = require('bcryptjs');

// Load environment variables
require('dotenv').config({ path: '.env' });

// The prisma server
const db = require('../src/db');

// The data to seed in the database
const { products } = require('./seed.ts');

const seedDB = async () => {
  try {
    console.log('🌱 Starting database seed...');
    
    // Create or update the admin user
    console.log('Upserting admin user...');

    const email = process.env.SEED_ADMIN_EMAIL || 'system.admin@example.com';
    const password = process.env.SEED_ADMIN_PASSWORD || 'admin123';
    const hashed = await bcrypt.hash(password, 12);

    const users = [
      {
        firstName: 'system',
        lastName: 'admin',
        email: email,
        password: hashed,
        permissions: {
          set: ['ADMIN', 'USER', 'PRODUCTCREATE', 'PRODUCTUPDATE', 'PRODUCTDELETE', 'PERMISSIONUPDATE']
        }
      }
    ];

    const update = {
      permissions: users[0].permissions,
      ...(process.env.SEED_ADMIN_RESET === 'true' ? { password: hashed } : {}),
    };

    const seedAdmin = await db.user.upsert({
      where: { email: users[0].email },
      update,
      create: users[0]
    });

    if (process.env.SEED_ADMIN_RESET === 'true') {
      console.log('🔐 Admin password reset via seed');
    }

    console.log(`✅ Upserted user: ${seedAdmin.email} with permissions: ${seedAdmin.permissions.join(', ')}`);
    
    // Create products if they don't exist
    console.log(`Checking ${products.length} products...`);

    let createdCount = 0;
    let skippedCount = 0;
    
    for (const product of products) {
      const existing = await db.product.findFirst({
        where: { title: product.title },
      });

      if (existing) {
        skippedCount++;
      } else {
        await db.product.create({
          data: {
            ...product,
            user: { connect: { id: seedAdmin.id } },
          },
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
