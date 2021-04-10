const { Router } = require("express");
const ItemRepo = require("../../repository/item.dao");
const router = Router();

// Create item
router.post("/new", async (req, res) => {
  const newItem = req.body;
  try {
    const item = await ItemRepo.create(newItem);
    res.status(201).json({ message: "New item created" });
  } catch (e) {
    res.status(500).json({ message: "Error while create new item" });
  }
});

// edit item
router.put("/edit/:id", async (req, res) => {
  const allData = req.body;
  const idItem = req.params.id;
  try {
    const editedItem = await ItemRepo.edit(idItem, allData);
    res.status(201).json({ name: editedItem.name });
  } catch (e) {
    res.status(500).json({ message: "Error while edit a Item" });
  }
});

// delete item de uma order

module.exports = router;
