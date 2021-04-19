const router = require('express').Router()
const axios = require('axios');
const db = require('../models');
require('dotenv').config();

const BASEURL = "https://api.yelp.com/v3/businesses/search"
const BEARER = process.env.BEARERTOKEN

// Yelp API
router.get("/api/restaurantsearch/:term/:location", (req, res) => {
    const config = {
        headers: {
            Authorization: `Bearer ${BEARER}`
        },
        params: {
            terms: req.params.term,
            location: req.params.location
        }
    };
    // console.log(corsAny + BASEURL, config);
    axios.get(BASEURL, config).then(results => {

        res.json(results.data.businesses)
    })
})

module.exports = router