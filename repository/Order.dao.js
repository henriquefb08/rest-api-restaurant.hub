const Order = require("../models/Order.model");

class OrderRepository {
  constructor(OrderModel) {
    this.order = OrderModel;
  }

  // Create new Order
  create = async (newOrder) => {
    try {
      const createdOrder = await this.order.create(newOrder);
      console.log(newOrder)
      return createdOrder;
    } catch (e) {
      throw new Error();
    }
  };

  // Edit any Order

  edit = async (id, order) => {
    try {
      const editOrder = await this.order.findByIdAndUpdate(id, order, {
        new: true,
      });
      return editOrder;
    } catch (error) {
      throw new Error();
    }
  };

  // delete a Item of a Order
delete = async(id, order) => { 
  try {
    const deleteItem = await this.order.findByIdAndDelete(id, order, { new: true} )
    return deleteItem;
  } catch (e) {
    throw new Error();

  }


}


}
module.exports = new OrderRepository(Order);
