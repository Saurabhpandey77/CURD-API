require("dotenv").config();
const express = require('express')
const app = express()
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000;

const products_routers = require("./routes/product")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products",products_routers);

const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=> {
        console.log(`node api is running on port ${PORT}`)
    })
    }catch (error){
        console.log(error);
    }
};
start();