const { Router  } = require("express"); 
const RestaurantRepo = require('../repository/Restaurant.dao'); 
const router = Router(); 

// Route to create new Restaurant
router.post("/signup", async (req, res) => {
    const newRestaurant = req.body;
  try {
    const restaurant = await RestaurantRepo.create(newRestaurant);
    res.status(201).json({ message: "New rest created" });
  } catch (e) {
    res.status(500).json({ message: "Error while create new Rest" });
  }
});

// Route to edit a Restaurant
router.put('/edit/:id', async (req, res) => { 
    const allData = req.body; 
    const idRestaurant = req.params.id;
    try {
        const editedRestaurant = await RestaurantRepo.edit(idRestaurant, allData)
        res.status(201).json({name: editedRestaurant.name});
    } catch (error) {
        res.status(500).json({ message: "Error while edit a Consumer" });        
    }
});


// Route to list Restaurants


//Create route to login to restaurant;


module.exports = router;