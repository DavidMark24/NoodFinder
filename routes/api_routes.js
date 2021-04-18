const router = require('express').Router()
const axios = require('axios');

require('dotenv').config();

const BASEURL = "https://api.yelp.com/v3/businesses/search"
const BEARER = process.env.BEARERTOKEN

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

// For MVP, body will contain hard-coded email. 
// Recieves: email, recipe name, cook-time, servings, url.
router.post('/api/recipes', ({body}, res) => {
    const {email, name, cookTime, servings, url} = body;
    res.json('request successful!')
})

// Yelp API
router.get("/api/restaurantsearch/:term/:location" , (req , res) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${BEARER}`
        }
    };
    axios.get("https://api.yelp.com/v3/businesses/search?term=" + req.params.term + "&location=" + req.params.location, config).then(results => {
      
        res.json(results.data.businesses)
    })
})


module.exports = router