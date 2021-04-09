const { Router } = require("express");
const consumerRepo = require("../repository/Consumer.dao");
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");

const router = Router();

// Route to create new Consumer
router.post("/signup", async (req, res) => {
  try {
    
    const consumer = await consumerRepo.create(req.body);
    res.status(201).json(consumer);
  } catch (error) {
    res.status(500).json({ message: "Error while create new consumer" });
  }
});

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

//Create route to login to consumer;

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const consumer = await consumerRepo.findConsumer(email);
    if (!consumer) {
      return res.status(400).json();
    }
    const compareHash = bcrypt.compareSync(password, consumer.passwordHash);

    if (!compareHash) {
      return res.status(400).json();
    }

    const payload = {
      id: consumer.id,
      email: consumer.email,
    };

    const token = jwt.sign(payload, process.env.SECRET_JWT, {
      expiresIn: "1day",
    });

    res.status(200).json({ payload, token });
  } catch (e) {
    res.status(500).json();
  }
});

//Create route to logout to consumer;

module.exports = router;
