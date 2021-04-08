const { Router } = require("express");
const ConsumerRepo = require("../repository/Consumer.dao");
const router = Router();


// Route to create new Consumer
router.post("/signup", async (req, res) => {
  try {
    const consumer = await ConsumerRepo.create(req.body);
    res.status(201).json(consumer);
  } catch (error) {
    res.status(500).json( {message:'Error while create new consumer'})
  }

});
 

// Route to edit a Consumer
router.put("/edit/:id", async (req, res) => {
  const allData = req.body;
  const idConsumer = req.params.id;
  try {
    const editedConsumer = await ConsumerRepo.edit(idConsumer, allData);
    res.status(201).json({ name: editedConsumer.name });
  } catch (e) {
    res.status(500).json({ message: "Error while edit a Consumer" });
  }
});

//Create route to login to consumer;

//Create route to logout to consumer;

module.exports = router;
