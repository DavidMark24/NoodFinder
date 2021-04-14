const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String
    },
    cookTime: {
        type: Number
    },
    category: {
        type: String
    },
    ingredients: {
        type: String
    }
    

});

const Recipe = mongoose.model("Recipes",recipeSchema);

module.exports = Recipe;