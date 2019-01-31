// Dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const expressWinston = require('express-winston');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const request = require('request');
const keys = require('./keys.js')
const https = require('https');
const logger = require('./log/lib/logger.js');
const requestLogger = require('./log/lib/requestLogger.js');
const expressRequestId = require('express-request-id')();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const stripe = require('stripe')(keys.stripe);

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3000;

// configuration ============================================================
// Setup database connection
const db = require('./models');

// pass passport for configuration
require('./config/passport')(passport, db.user);

// Set up body parser from documentation
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Implement Morgan request logger
app.use(requestLogger);

// Appends request ID to request object
app.use(expressRequestId);

// Access static directory
app.use(express.static(__dirname + '/public'));

// Set Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Required for Passport
app.use(session(keys.session)); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// express-winston logger BEFORE the router
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      timestamp: new Date().toISOString(),
      colorize: true
    })
  ]
}));

//Routes
require('./routing/apiRoutes.js')(app, passport);
require('./routing/viewRoutes.js')(app, passport);
require('./routing/cartRoutes.js')(app, passport);
require('./routing/fbRoutes.js')(app, passport);
require('./routing/stripePost.js')(app, passport);

// express-winston errorLogger makes sense AFTER the router.
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

// Request error handling
app.use((request, response) => {
  console.warn(new Date().toISOString(), request.method, request.originalUrl, '404');
  return response.status(404).render('404', {
    title: '404',
  })
});

// Error handling
app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }
  console.log(error);
  return response.status(500).render('500', {
    title: '500',
  });
});

// Start the server
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  })
  .on('listening', () => logger.info('HTTP server listening on port ${PORT}!'));
});

module.exports = app;
