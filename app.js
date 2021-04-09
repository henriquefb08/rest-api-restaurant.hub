require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Connect DB

require("./config/db.config");

const app = express();

// Middlewares

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Routes

const consumerRoutes = require("./routes/Consumer.routes");
const RestaurantRoutes = require("./routes/Restaurant.routes");
const OrderRoutes = require("./routes/Order.routes");
const ItemRoutes = require("./routes/Item.routes");

// Public routes
app.use("/order", OrderRoutes);
app.use("/item", ItemRoutes);

//Private routes with jwt

app.use("/restaurant", RestaurantRoutes);
app.use("/consumer", consumerRoutes);

//middleware of autentication
app.use((req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Request without token" });
  }
  const tokenWithoutBearer = token.split(" ")[1];
  try {
    const decodedToken = jwt.verify(
        tokenWithoutBearer, 
        process.env.SECRET_JWT
        );
        req.consumer = { decodedToken};
        return next()
  }catch(error){
      return res.status(401) 

  }
});

// export app

module.exports = app;
