const Order = require("../models/Order.model");

class OrderRepository {
  constructor(OrderModel) {
    this.Order = OrderModel;
  }

  // Create new Order
  create = async (newOrder) => {
    try {
      const createdOrder = await this.order.create(newOrder);
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
}
module.exports = new OrderRepository(Order);
