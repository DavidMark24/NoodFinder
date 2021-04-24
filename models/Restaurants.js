const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name: {
        type: String,
    },
    rating: {
        type: Number
    },
    hours: {
        type: Boolean
    },
    phone: {
        type: String
    },
    image_url: {
        type: String
    }
});

// const restaurantsSchema = mongoose.model("Restaurants", restaurantsSchema);

module.exports = restaurantsSchema;