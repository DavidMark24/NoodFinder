const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('./services/passport')
const db = require('./models');
const mongoose = require('mongoose');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NoodFinder", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.post('/newUser', ({ body }, res) => {
    const newUser = new db.User(body)
    newUser.hashPassword();
    db.User.create(newUser)
        .then(dbUser => {
            res.json(dbUser.email)
        })
        .catch(err => {
            res.json(err);
        });
})

// If passport middleware succeeds, it will send User object in req.
app.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        // instructs Passport to flash an error message using the message option set by the verify callback
        failureFlash: true
    }), (req, res) => {
        // The user is now identified by the rest of the program through token that is sent in reponse.
        res.send({
            token: req.user
        })
    })

// All other API calls must use bearer authentication.
app.get('/users', passport.authenticate('bearer'), (req, res) => {
    res.json('get request successful!')
})


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});



