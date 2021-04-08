require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

// Connect DB

require("./config/db.config");

const app = express();

// Middlewares

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Routes

const consumerRoutes = require("./routes/Consumer.routes");
app.use('/consumer', consumerRoutes);

const RestaurantRoutes = require('./routes/Restaurant.routes');
app.use('/restaurant', RestaurantRoutes); 

const OrderRoutes = require("./routes/Order.routes");
app.use('/order', OrderRoutes);

const ItemRoutes = require("./routes/Item.routes");
app.use('/item', ItemRoutes);

// export app

module.exports = app;






