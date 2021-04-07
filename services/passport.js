const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy
const db = require('../models');

passport.use(new LocalStrategy(
    function (username, password, done) {
        // db model method to find user with given username and password.
        db.User.findOne({
            username: username
        }).then(function (user) {
            // done invoked with false for bad credentials.
            if (!user) {
                return done(null, false, { message: 'Incorrect username' })
            }
            if (!user.validPassword(password, user.password)) {
                return done(null, false, { message: 'Incorrect password.' })
            }
            console.log("we're fine.");
            return done(null, user)
        })
    }
))

// Boilerplate passport stuff. 
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.exports = passport;