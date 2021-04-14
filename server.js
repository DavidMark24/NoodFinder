const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(require("./routes/api-routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipe")

app.listen(PORT, () => {
    console.log("App is listening on port", PORT)
})