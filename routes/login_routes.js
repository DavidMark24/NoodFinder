const passport = require('../services/passport');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');
const db = require('../models');
const sendEmail = require('../services/send_email');

module.exports = (app) => {
    app.post('/newUser', ({ body }, res) => {
        const newUser = new db.User(body);
        newUser.hashPassword();
        db.User.create(newUser)
            .then(dbUser => {
                let now = new Date(Date.now());
                const SECRET = now.getHours().toString();
                const token = jwt.encode({ email: dbUser.email }, SECRET);
                res.json({
                    token
                });
            })
            .catch(err => {
                // If the email is not unique. 
                if (err.code === 11000) res.sendStatus(403);
                else res.json(err);
            });
    })

    // If passport middleware succeeds, it will send User object in req.
    // If the user is not found, server sends back 401 Unauthorized.
    app.post('/login',
        passport.authenticate('local'),
        (req, res) => {
            // The user is now identified by the rest of the program through token that is sent in reponse.
            res.json({
                token: req.user
            })
        })

    // We create a password-reset token, and then send an email to the user.
    app.post('/passwordreset', async (req, res) => {
        if (req.body.email !== undefined) {
            let emailAddress = req.body.email;
            let user = await db.User.findOne({ email: emailAddress })
            if (user == null) return res.sendStatus(404);
            let payload = {
                // User id from db.
                id: user._id,
                email: emailAddress
            }

            // Make this a one-time-use token by using the user's current password hash from the database, and combine it
            // with the user's created date to make a very unique secret key!
            // Adding the createdAt date ensures that if the user's password is leaked on a different site, 
            // it can't be used here. 
            let secret = `${user.password}-${user.createdAt}`
            let token = jwt.encode(payload, secret);

            // TODO: Add a dynammic client URL.
            let clientURL = process.env.CLIENT_URL || 'http://localhost:3000';
            let resetLink = `${clientURL}/resetpassword/?id=${payload.id}&token=${token}`
            sendEmail(resetLink, emailAddress);
            // For now, will just return a link to click:
            res.send('We have sent you an email to reset your password.')
        }
        else {
            res.send('Email address is missing.')
        }
    })

    app.post('/resetpassword', async ({ body }, res) => {
        let { userID, token, newPassword } = body;
        let user = await db.User.findOne({ _id: userID });
        let secret = `${user.password}-${user.createdAt}`;

        // Extract payload using token sent by POST request.
        let payload;
        try {
            payload = jwt.decode(token, secret);
        } catch (error) {
            // Bad tokens result in 401 Unauthorized.
            res.sendStatus(401)
        }
        // Check that password reset token's id matches that of user.
        if (payload.id === userID) {
            let newPasswordHash = bcrypt.hashSync(
                newPassword,
                bcrypt.genSaltSync(10),
                null
            );
            let updatedUser = await db.User.findOneAndUpdate({ _id: userID }, { password: newPasswordHash })
            res.json({
                message: 'password updated!'
            })
        }
        else res.sendStatus(401)
    })
}