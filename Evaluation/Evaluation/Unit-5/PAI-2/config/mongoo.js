const mongoose = require('mongoose');

const mongoDB = "mongodb://127.0.0.1:27017/SecureAccount";

async function connectDB(){
   try {
    await mongoose.connect(mongoDB);
    console.log("Database Connected");
   } catch (error) {
    console.log(error)
   }
}

module.exports = connectDB;