const express = require('express');
const connectDB = require('./config/mongodb');
const authRouters = require('./routes/auth');

const app = express();
app.use(express.json());

connectDB();

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.use('/api/auth',authRouters);

app.listen(3000,()=>{
    console.log("Server Started");
})