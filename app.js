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



// Public routes
const consumerPublicRoutes = require("./routes/public/Consumer.routes");
const RestaurantPublicRoutes = require("./routes/public/Restaurant.routes");
const ItemPublicRoutes = require("./routes/public/Item.routes");

//Private routes with jwt
const consumerRoutes = require("./routes/private/Consumer.routes");
const RestaurantRoutes = require("./routes/private/Restaurant.routes");
const OrderRoutes = require("./routes/private/Order.routes");
const ItemRoutes = require("./routes/private/Item.routes");


app.use("/public/restaurant", RestaurantPublicRoutes);
app.use("/public/consumer", consumerPublicRoutes);
app.use("/public/item", ItemPublicRoutes);



//middleware of autentication to restaurant and consumer
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

        if(decodedToken.type === "consumer") { 
          req.consumer = { decodedToken};
        } else { 
          req.restaurant = { decodedToken};
        }
        return next()
  }catch(error){
      return res.status(401) 

  }
});



app.use("/private/restaurant", RestaurantRoutes);
app.use("/private/consumer", consumerRoutes);
app.use("/private/order", OrderRoutes);
app.use("/private/item", ItemRoutes);


// export app

module.exports = app;




// Separação de public routes de private routes (consumer e restaurant)
// Orders precisam ser privados
