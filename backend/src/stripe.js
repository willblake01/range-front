const stripe = require("stripe")(process.env.STRIPE_SECRET);
stripe.setApiVersion("2018-11-08");

module.exports = stripe;
