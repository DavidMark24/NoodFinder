const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jwt-simple');
const db = require('../models');

// Change this, and use dot-env.
// SECRET used for JWT encrypt/decrypt, so very important.
const SECRET = 'mysecret'
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function (username, password, done) {
        // db model method to find user with given username and password.
        db.User.findOne({
            email: username
            // You can add a token expiration date to a JWT token.
        }).then(function (user, err) {
            if (err) return err;
            // done invoked with false for bad credentials.
            if (!user) {
                return done(null, false, { message: 'Incorrect username' })
            }
            if (!user.validPassword(password, user.password)) {
                return done(null, false, { message: 'Incorrect password.' })
            }
            return done(null, jwt.encode({ email: user.email }, SECRET))
        })
    }
))

// Used to secure endpoints.
// GET/POST requests will pass token in header. See Postman for exact code.  
passport.use(new BearerStrategy(
    function (token, done) {
        const decryptedUsername = jwt.decode(token, SECRET).username;
        db.User.findOne({
            username: decryptedUsername
        }).then(function (user, err) {
            if (err) return err;
            if (user == null) done(null, false, { message: 'Bad token.' })
            // Passes user object to route.
            else done(null, user);
        })
    }));

// Boilerplate passport stuff. 
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.exports = passport;