const express = require("express");


const app = express();

const menuDataRoute = require('./menuDataRoute');
const headerData = require('./HeaderRouter');
const userRoute = require('./userRoute');
const blogData = require('./BlogRouter');

app.use('/', menuDataRoute );
app.use('/user', userRoute );
app.use('/header', headerData );
app.use('/blog', blogData );

module.exports = app;

