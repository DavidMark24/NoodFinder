const router = require('express').Router()
const axios = require('axios');
const db = require('../models');
const passport = require('../services/passport');
require('dotenv').config();

const BEARER = process.env.BEARERTOKEN

// Yelp API
router.get("/api/restaurantsearch/:term/:location" , (req , res) => {
    const config = {
        headers: {
            Authorization: `Bearer ${BEARER}`
        }
    };
    axios.get("https://api.yelp.com/v3/businesses/search?term=" + req.params.term + "&location=" + req.params.location +"&limit=50", config).then(results => {
        res.json(results.data.businesses)
    })
})
router.get('/api/restaurants', passport.authenticate('bearer'), async ({user}, res) => {
    let favoriteRestaurants= user.favoriteRestaurants;
    res.json(favoriteRestaurants);
})

router.post('/api/restaurants', passport.authenticate('bearer'), async ({body, user}, res) => {
    console.log("body:", body, user);
    // res.json("post successful!")
    const email = user.email;
    const { name, hours, phone, image_url, rating } = body;
    const newRestaurant = {
        name,
        rating,
        hours,
        phone,
        image_url
    }
    let doc = await db.User.findOneAndUpdate({ email }, { $push: { favoriteRestaurants: newRestaurant } }, { new: true })

    res.json({
        restaurantID: doc.favoriteRestaurants[doc.favoriteRestaurants.length - 1]._id
    })
})

router.delete('/api/restaurants/:email/:restaurantID', async (req, res) => {
    const { email, restaurantID } = req.params;
    db.User.findOne({ email })
        .then(async (user) => {
            await user.favoriteRestaurants.id(restaurantID).remove();
            user.save();
            res.json("delete successful!")
        })

})


module.exports = router