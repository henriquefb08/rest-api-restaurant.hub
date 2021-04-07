const { Router } = require("express");

const ConsumerRepo = require("../repository/Consumer.dao");

const router = Router();

// Route to create new Consumer

router.post("/signup", async (req, res) => {
    const newConsumer = req.body;
  try {
    const consumer = await ConsumerRepo.create(newConsumer);
    res.status(201).json({ message: "New consumer created" });
  } catch (e) {
    res.status(500).json({ message: "Error while create new Consumer" });
  }
});

// Route to edit a Consumer

router.put("/edit/:id", async (req, res) => { 
    const allData = req.body;
    const idConsumer = req.params.id;
    try {
        const editedConsumer = await ConsumerRepo.edit(idConsumer, allData)
        res.status(201).json({name: editedConsumer.name});
    } catch (e) { 
        res.status(500).json({ message: "Error while edit a Consumer" });
    }

})
 
module.exports = router;