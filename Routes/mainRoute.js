const express = require("express");


const app = express();

const menuDataRoute = require('./menuDataRoute');
const headerData = require('./HeaderRouter');

app.use('/', menuDataRoute );
app.use('/header', headerData );

module.exports = app;

