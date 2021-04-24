const router = require('express').Router()
const axios = require('axios');
const db = require('../models');
require('dotenv').config();

const BASEURL = "https://api.yelp.com/v3/businesses/search"
const BEARER = process.env.BEARERTOKEN
// const config = {
//     headers: {
//         Authorization: `Bearer ${BEARER}`
//     }
// };
// const secondAPICall = (id) => {
//     axios.get(`https://api.yelp.com/v3/businesses/${id}`, config).then(results => results.data)
// }
// Yelp API
router.get("/api/restaurantsearch/:term/:location" , (req , res) => {
    const config = {
        headers: {
            Authorization: `Bearer ${BEARER}`
        }
    };
    axios.get("https://api.yelp.com/v3/businesses/search?term=" + req.params.term + "&location=" + req.params.location +"&limit=50", config).then(results => {
        res.json(results.data.businesses)
    // console.log(results.data.businesses[0].id)
     //res.json( secondAPICall(results.data.businesses[0].id)
    //    const id = results.data.businesses[0].id;

//   return axios.get(`https://api.yelp.com/v3/businesses/${id}`, config).then(results => res.json(results.data))
    })
})



module.exports = router