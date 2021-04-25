const { Router } = require("express");
const restaurantRepo = require("../../repository/Restaurant.dao");

const router = Router();

// Route to edit a Restaurant
router.put("/edit/:id", async (req, res) => {
  const allData = req.body;
  const idRestaurant = req.params.id;
  try {
    const editedRestaurant = await restaurantRepo.edit(idRestaurant, allData);
    res.status(201).json({ name: editedRestaurant.name });
  } catch (error) {
    res.status(500).json({ message: "Error while edit a Restaurant" });
  }
});

// Remove a restaurant

router.delete("/delete/:id", async (req, res) => {
  try {
    await restaurantRepo.removeRest(req.params.id);
    res.status(200).json({ message: "Your restaurant was deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while remove your Restaurants of our Database" });
  }
});

// List orders in a rest
router.get("/list/:id/orders", async (req, res) => {
  try {
    const listedOrders = await restaurantRepo.listOrdersRest(req.params.id);
    res.status(200).json(listedOrders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while list orders in a Restaurant" });
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

