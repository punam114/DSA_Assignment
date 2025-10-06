const mongoose = require('mongoose');

function connectDB(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/TaskBoard');
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;