const express = require('express');
const bodypase = require('body-parser');
const app=express();
const PORT = 4000;
const cors= require('cors');

const mainRoute = require('./Routes/mainRoute');
const { default: mongoose } = require('mongoose');

app.use(bodypase());
app.use(cors());
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/',mainRoute);

mongoose.connect('mongodb+srv://murutestdb:Muru_1998@muru.ypd86.mongodb.net/EzhilElit?retryWrites=true&w=majority&appName=EzhilElit')
.then(() =>{
    app.listen(PORT, () =>{
        console.log("Server Running in "+ PORT);
    });
}).catch( err =>{
    console.log(err);
});