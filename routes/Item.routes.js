const { Router } = require( 'express');
const ItemRepo = require('../repository/item.dao');
const router = Router(); 


// Create item
router.post('/new', async (req, res) => {  
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
        const editedItem = await ItemRepo.edit(idItem, allData)
        res.status(201).json({name: editedItem.name});
    } catch (e) { 
        res.status(500).json({ message: "Error while edit a Item" });
    }
});

// list items de um único restaurant
router.get('/list', async (req, res) => {
    console.log("Antes do try catch")
    try {
        console.log("dentro do try")

      const items = await ItemRepo.list();
    console.log("aqui")
      res.status(201).json(items);
    } catch (error) {
      res.status(500).json({ message: 'Error while get Items' });
    }
  });


  module.exports = router;
