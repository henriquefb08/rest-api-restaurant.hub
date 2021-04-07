const { Router } = require("express");

const OrderRepo = require("../repository/Order.dao");

const router = Router();

// Route to create new Order

router.post("/signup", async (req, res) => {
    const newOrder = req.body;
  try {
    const order = await OrderRepo.create(newOrder);
    res.status(201).json({ message: "New order created" });
  } catch (e) {
    res.status(500).json({ message: "Error while create new order" });
  }
});

// Route to edit a Order

router.put("/edit/:id", async (req, res) => { 
    const allData = req.body;
    const idOrder = req.params.id;
    try {
        const editedOrder = await OrderRepo.edit(idOrder, allData)
        res.status(201).json({name: editedOrder.name});
    } catch (e) { 
        res.status(500).json({ message: "Error while edit a Order" });
    }

})
 
module.exports = router;
