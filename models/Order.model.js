const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    order_id: {
      type: Number,
      required: true,
    },
    item_id: [{
      type: Number,
      required: true,
    }],
    value: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema );