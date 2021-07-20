const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Start it!
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);

const app = express();
app.use(cookieParser());

// Decode the JWT so we can get the user ID on each request
app.use((req, res, next) => {
  const { token } = req.cookies;
  if(token) {
    const {userId} = jwt.verify(token, process.env.APP_SECRET);
    // Put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

// Create a middleware that populates the user on each request
app.use(async (req, res, next) => {
  // If they aren't logged in, skip this
  if(!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
    );
    req.user = user;
    next();
});

// Mount Apollo middleware here.
server.applyMiddleware({ app });

new Promise(resolve => app.listen({ port: process.env.PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  return { server, app };
