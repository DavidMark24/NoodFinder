const router = require('express').Router()
const axios = require('axios');
const db = require('../models');
require('dotenv').config();

const BASEURL = "https://api.yelp.com/v3/businesses/search"
const BEARER = process.env.BEARERTOKEN

// Yelp API
router.get("/api/restaurantsearch/:term/:location" , (req , res) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${BEARER}`
        }
    };
    axios.get("https://api.yelp.com/v3/businesses/search?term=" + req.params.term + "&location=" + req.params.location +"&limit=50", config).then(results => {
      
   res.json(results.data.businesses)
    })
})


module.exports = router