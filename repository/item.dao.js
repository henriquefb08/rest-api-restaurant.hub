const Item = require("../models/Item.model");

class ItemRepository {
  constructor(ItemModel) {
    this.item = ItemModel;
  }

  // Create item

  create = async (newItem) => {
    try {
      const createdItem = await this.item.create(newItem);
      return createdItem;
    } catch (e) {
      throw new Error();
    }
  };

  // Edit item

  edit = async (id, item) => {
    try {
      const editItem = await this.item.findByIdAndUpdate(id, item, {
        new: true,
      });
      return editItem;
    } catch (error) {
      throw new Error();
    }
  };

  // list items de um único restaurant
  list = async () => {
    try {
      const items = await this.item.find()
      // .populate('restaurant_id')
        
      return items;
    } catch (error) {
      throw new Error();
    }
  };

}


module.exports = new ItemRepository(Item);
