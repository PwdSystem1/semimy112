//API
const express = require('express');

// Cors Origin
const cors = require('cors');

//ENVIRONMENT VAR
require('dotenv').config();

// DB Connetion
const db = require('./config/db');

//ROUTES
const routes = require('./routes');

// Utilization Exress
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); //this will allow us to read the url body tags
// Use routes
app.use('/api',routes)

// Server Listen
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});