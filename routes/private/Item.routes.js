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

// delete item
router.delete("/delete/:id", async (req, res) => {
  try {
    await ItemRepo.removeItem(req.params.id);
    
    res.status(200).json({ message: "Your Item was deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while remove your Item of our Database" });
  }
});



module.exports = router;
