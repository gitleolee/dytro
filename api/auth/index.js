const jwt = require('jwt-simple');
const config = require('../config');
const passportService = require('./passport'); // eslint-disable-line no-unused-vars
const passport = require('passport');

module.exports = {
  tokenForUser: userId =>
    jwt.encode({ sub: userId, iat: new Date().getTime() }, config.jwtSecret),
  requireAuth: passport.authenticate('jwt', { session: false }),
  requireSignin: passport.authenticate('local', { session: false })
};
