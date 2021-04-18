const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const RecipeSchema = require('./Recipes');

const UserSchema = new mongoose.Schema({
    // TODO: add must be unique later.
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    favoriteRecipes: [RecipeSchema]
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