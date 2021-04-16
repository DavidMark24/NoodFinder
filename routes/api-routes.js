const router = require('express').Router()
const axios = require ('axios');

require('dotenv').config();

const BASEURL = "https://api.yelp.com/v3/businesses/search"
const BEARER = process.env.BEARERTOKEN

// Recipe API
router.get("/api/recipesearch/:term" , (req, res) => {
    console.log(process.env.RECIPEAPI);
    axios.get("https://api.edamam.com/search?q="+req.params.term +"&app_id=97b6a1fd&app_key="+ process.env.RECIPEAPI)
    .then(results => {
        res.json(results.data.hits)
    })
          
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