const express = require("express");
const PORT = process.env.PORT || 4005;
const app = express();
const passport = require('./services/passport')
const mongoose = require('mongoose');
const cors = require('cors');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NoodFinder", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

require('./routes/login_routes')(app);

app.use(require("./routes/api_routes"));
app.use(require("./routes/recipe_routes"));

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});



