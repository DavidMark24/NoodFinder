const router = require('express').Router()
const axios = require('axios');
const db = require('../models');
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
router.get('/api/recipes/:user', async (req, res) => {
    let user = await db.User.findOne({ email: req.params.user });
    res.json(user.favoriteRecipes)
})

// For MVP, body will contain hard-coded email. 
// Recieves: email, recipe name, cook-time, servings, url.
router.post('/api/recipes', async ({ body }, res) => {
    const { email, name, cookTime, servings, url, image } = body;
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

// Remove from favorite recipes.
router.delete('/api/recipes/:email/:recipeID', async (req, res) => {
    const { email, recipeID } = req.params;
    db.User.findOne({ email })
        .then(async (user) => {
            await user.favoriteRecipes.id(recipeID).remove();
            user.save();
            res.json("delete successful!")
        })

})

module.exports = router;