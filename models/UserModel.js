const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // add must be unique later.
    email: String,
    password: String
}, { timestamps: true });

UserSchema.methods.validPassword = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

UserSchema.methods.hashPassword = function () {
    this.password = bcrypt.hashSync(
        this.password,
        bcrypt.genSaltSync(10),
        null
    );
    return this.password;
}

const User = mongoose.model("User", UserSchema)
module.exports = User;