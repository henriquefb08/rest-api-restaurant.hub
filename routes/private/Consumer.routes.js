const { Router } = require("express");
const consumerRepo = require("../../repository/Consumer.dao");

const router = Router();

// Route to edit a Consumer
router.put("/edit/:id", async (req, res) => {
  const allData = req.body;
  const idConsumer = req.params.id;
  try {
    const editedConsumer = await consumerRepo.edit(idConsumer, allData);
    res.status(201).json({ name: editedConsumer.name });
  } catch (e) {
    res.status(500).json({ message: "Error while edit a Consumer" });
  }
});

// Route to delete a Consumer

router.delete("/delete/:id", async (req, res) => {
  try {
    await consumerRepo.deleteCons(req.params.id);
    res.status(200).json({ message: "This consumer was deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error while delete a Consumer" });
  }
});

//List a specific consumer

router.get("/list/:id", async (req, res) => {
  try {
    const consumer = await consumerRepo.listOne(req.params.id);
    res.status(201).json(consumer);
  } catch (error) {
    res.status(500).json({ message: "Error while get a specific Restaurant" });
  }
});

module.exports = router;
