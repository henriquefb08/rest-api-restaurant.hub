const { Router } = require("express");
const restaurantRepo = require("../../repository/Restaurant.dao");
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");


const router = Router();

// Route to create new Restaurant
router.post("/signup", async (req, res) => {
  try {
    const restaurant = await restaurantRepo.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error while create new restaurant" });
  }
});

//Create route to login to restaurant;

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const restaurant = await restaurantRepo.findRestaurant(email);

      if (!restaurant) {
        return res.status(400).json();
      }
      const compareHash = bcrypt.compareSync(password, restaurant.passwordHash);
  
      if (!compareHash) {
        return res.status(400).json();
      }
  
      const payload = {
        id: restaurant.id,
        email: restaurant.email,
        type: 'restaurant'
  
      };
  
      const token = jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: "1day",
      });
  
      res.status(200).json({ payload, token });
    } catch (e) {
      res.status(500).json();
    }
  });
  


// Route to list Restaurants
router.get("/list", async (req, res) => {
  try {
    const restaurants = await restaurantRepo.list();
    res.status(201).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error while get Restaurants" });
  }
});

//List a specific restaurant

router.get("/list/:id", async (req, res) => {
  try {
    const restaurant = await restaurantRepo.listOne(req.params.id);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error while get a specific Restaurant" });
  }
});

module.exports = router;
