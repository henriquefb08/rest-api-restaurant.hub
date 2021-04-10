const { Router } = require("express");
const ItemRepo = require("../../repository/item.dao");
const router = Router();

// list all items of a specific Restaurant
router.get("/list/:id", async (req, res) => {
  try {
    const listItems = await ItemRepo.listByRestaurant(req.params.id);
    res.status(200).json(listItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while get Items of a specific Restaurant" });
  }
});

// list all items
router.get("/list", async (req, res) => {
  try {
    const items = await ItemRepo.list();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error while get Items" });
  }
});

module.exports = router;
