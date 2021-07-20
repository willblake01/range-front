// The prisma server
const db = require('../src/db');

// The data to seed in the database
const { users, products } = require('./seed');

// users.forEach(async user => {
//   await db.mutation.createUser({
//     data: user
//   })
//   console.log(seedUser.data)
//   .catch(e => {
//     console.log(e);
//     process.exit(1)
//   })
// });

// products.forEach(async product => {
//   await db.mutation.createProduct({
//     data: product
//   })
//   .catch(e => {
//     console.log(e);
//     process.exit(1)
//   })
// });

const seedDB = async (users, products) => {
  const seedUser = await db.mutation.createUser({
    data: users[0]
  })
  if (seedUser) {
    products.forEach( async product => {
      await db.mutation.createProduct({
        data: product
      })
    })
  }
}
seedDB(users, products);
