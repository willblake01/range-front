module.exports = require('stripe')(process.env.STRIPE_SECRET);
stripe.setApiVersion("2018-11-08");
