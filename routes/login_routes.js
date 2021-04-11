const passport = require('../services/passport');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');
const db = require('../models');
const sendEmail = require('../services/send_email');

module.exports = (app) => {
    app.post('/newUser', ({ body }, res) => {
        const newUser = new db.User(body)
        newUser.hashPassword();
        db.User.create(newUser)
            .then(dbUser => {
                res.json({
                    firstName: dbUser.firstName,
                    lastName: dbUser.lastName
                })
            })
            .catch(err => {
                res.json(err);
            });
    })

    // If passport middleware succeeds, it will send User object in req.
    app.post('/login',
        passport.authenticate('local'),
        (req, res) => {
            // The user is now identified by the rest of the program through token that is sent in reponse.
            res.send({
                token: req.user
            })
        })

    // Grabs email from user and sends POST request to API. 
    app.get('/forgotpassword', function (req, res) {
        // TODO: Create better 'forgot password' page.
        res.send('<form action="/passwordreset" method="POST">' +
            '<input type="email" name="email" value="" placeholder="Enter your email address..." />' +
            '<input type="submit" value="Reset Password" />' +
            '</form>');
    });

    // We create a password-reset token, and then send an email to the user.
    app.post('/passwordreset', async (req, res) => {
        if (req.body.email !== undefined) {
            let emailAddress = req.body.email;
            let user = await db.User.findOne({ email: emailAddress })
            if (user == null) return res.sendStatus(404)
            let payload = {
                // User id from db.
                id: user._id,
                email: emailAddress
            }

            // Make this a one-time-use token by using the user's
            // current password hash from the database, and combine it
            // with the user's created date to make a very unique secret key!
            let secret = `${user.password}-${user.createdAt}`
            let token = jwt.encode(payload, secret);

            let clientURL = 'http://localhost:3001'
            let resetLink = `${clientURL}/resetpassword/${payload.id}/${token}`
            sendEmail(resetLink);
            // For now, will just return a link to click:
            res.send('We have sent you an email to reset your password.')
        }
        else {
            res.send('Email address is missing.')
        }
    })

    app.get('/resetpassword/:id/:token', async (req, res) => {
        // TODO: Fetch user from db using req.params.id.
        let user = await db.User.findOne({ _id: req.params.id });

        // Decrypt one-time-use token using the user's current password hash from db
        // and combine it with the user's created at date to make a very unique secret key!
        let secret = `${user.password}-${user.createdAt}`
        let payload = jwt.decode(req.params.token, secret);

        // TODO: Gracefully handle decoding issues. 
        // TODO: Create a nice form to reset password.
        // NOTE: POST body contains values 'id' and 'token'.
        res.send('<form action="/resetpassword" method="POST">' +
            '<input type="hidden" name="id" value="' + payload.id + '" />' +
            '<input type="hidden" name="token" value="' + req.params.token + '" />' +
            '<input type="password" name="password" value="" placeholder="Enter your new password..." />' +
            '<input type="submit" value="Reset Password" />' +
            '</form>');
    })

    app.post('/resetpassword', async (req, res) => {
        // IMPORTANT: Password SHOULD NOT change without verifying the password reset token first!
        let userID = req.body.id;
        let user = await db.User.findOne({ _id: userID });

        let secret = `${user.password}-${user.createdAt}`;
        // TODO: Gracefully handle decoding issues.
        let payload = jwt.decode(req.body.token, secret);
        // Check that password reset token's id matches that of user.
        if (payload.id === userID) {
            let newPasswordHash = bcrypt.hashSync(
                req.body.password,
                bcrypt.genSaltSync(10),
                null
            );
            let updatedUser = await db.User.findOneAndUpdate({ _id: userID }, { password: newPasswordHash })
        }
        res.json('password updated!')
        // TODO: Hash password from req.body.password and add it to db.

        // Change password property of given user. 
    })
}