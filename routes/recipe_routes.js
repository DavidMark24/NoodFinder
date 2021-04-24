const router = require('express').Router()
const axios = require('axios');
const db = require('../models');
const passport = require('../services/passport');
require('dotenv').config();

// Recipe API
router.get("/api/recipesearch/:term", (req, res) => {
    axios.get("https://api.edamam.com/search?q=" + req.params.term + "&app_id=97b6a1fd&app_key=" + process.env.RECIPE_API)
        .then(results => {
            res.json(results.data.hits)
        });
});

// Consider using dishType (soup, dessert, etc).
router.get('/api/cuisine/:genre/:query', (req, res) => {
    let { query, genre } = req.params;
    let url = `https://api.edamam.com/search?q=${query}&cuisineTypes=${genre}&to=100&app_id=97b6a1fd&app_key=${process.env.RECIPE_API}`
    axios.get(url)
        .then(results => {
            res.json(results.data.hits)
        });
})

// Get favorite recipes.
router.get('/api/recipes', passport.authenticate('bearer'), async ({user}, res) => {
    let favoriteRecipes = user.favoriteRecipes;
    res.json(favoriteRecipes);
})

// Add to favorites.
router.post('/api/recipes', passport.authenticate('bearer'), async ({body, user}, res) => {
    // res.json("post successful!")
    const email = user.email;
    const { name, cookTime, servings, url, image } = body;
    const newRecipe = {
        name,
        cookTime,
        servings,
        url,
        image
    }
    let doc = await db.User.findOneAndUpdate({ email }, { $push: { favoriteRecipes: newRecipe } }, { new: true })

    // New recipe is at the end of the array.
    res.json({
        recipeID: doc.favoriteRecipes[doc.favoriteRecipes.length - 1]._id
    })
})

// Remove a recipe from favorite recipes.
router.delete('/api/recipes/:recipeID', passport.authenticate('bearer'),async (req, res) => {
    const userID = req.user._id;
    const recipeID = req.params.recipeID;
    db.User.findOne({ _id: userID })
        .then(async (user) => {
            await user.favoriteRecipes.id(recipeID).remove();
            user.save();
            res.json(user.favoriteRecipes)
        })

})

module.exports = router;