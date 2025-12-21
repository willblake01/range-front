const stripe = require('stripe')(process.env.STRIPE_SECRET, {
  apiVersion: '2023-10-16'
});

module.exports = stripe;
