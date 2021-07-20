const stripe = require('stripe')(process.env.STRIPE_SECRET, {
  apiVersion: '2020-08-27'
});

module.exports = stripe;
