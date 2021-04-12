const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name: {
        type: String,
    },
    hours: {
        type: Number
    },
    phoneNumber: {
        type: Number
    }
});

const Restaurant = mongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurant;