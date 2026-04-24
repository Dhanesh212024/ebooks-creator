const mongoose = require("mongoose");

const mongodbUrl = "mongodb://localhost:27017/foodorder"

async function connectDB(){
    return mongoose.connect(mongodbUrl);
}

module.exports = connectDB