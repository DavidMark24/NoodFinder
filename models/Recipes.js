const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String
    },
    cookTime: {
        type: Number
    },
    servings: String, 
    url: String
});

// const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = recipeSchema;