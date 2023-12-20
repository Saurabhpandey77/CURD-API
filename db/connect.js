const mongoose = require("mongoose");
const { options } = require("../routes/product");


const connectDB = (uri) =>{
    console.log("connect db")
    return mongoose.connect(uri);
}

module.exports = connectDB;