const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const port = process.env.PORT || 4000;
const cors= require('cors');

const dotenv = require("dotenv").config();
const datas =process.env.MONGO_URI;
const mainRoute = require('./Routes/mainRoute');
const { default: mongoose } = require('mongoose');

app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/get',(req,res,next) =>{
    //console.log("app inside");
     res.status(200).json('got request');
   });

app.use('/',mainRoute);

mongoose.connect(datas)
.then(() =>{
    app.listen(port, () =>{
        console.log("Server Running in "+ port);
    });
}).catch( err =>{
    console.log(err);
});