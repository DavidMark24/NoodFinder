const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const restaurantsSchema = new Schema({
    name: {
        type: String,
    },
    address_1: {
        type: String,
    
    },
    address_2: {
        type: String,
    
    },
    address_3: {
        type: String,
    
    },
    city: {
        type: String,
    
    },
    zipcode: {
        type: String,
    
    },
    state: {
        type: String,
    
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