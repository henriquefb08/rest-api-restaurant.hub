require("dotenv").config(); 
const express = require('express'); 
const bodyparser = require('body-parser');
const cors = require('cors'); 

// Connect DB 

require('./config/db.config');

const app = express();
app.use(cors());
// Middlewares 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false})); 

// Routes



// export app

module.exports = app; 