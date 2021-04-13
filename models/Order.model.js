const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    order_id: {
      type: Number,
      required: true,
    },
    item_id: [
      {
        type: Schema.Types.ObjectId,
        ref: "item",
      },
    ],
    status: {
      type: Boolean,
      required: true,
    },
    restaurant_id: {
      type: Schema.Types.ObjectId,
      ref: "restaurant",
    },
  },
  
  {
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema);
