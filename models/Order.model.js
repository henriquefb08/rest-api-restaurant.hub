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
        ref: "Item",
      },
    ],
    status: {
      type: Boolean,
      required: true,
    },
    restaurant_id: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    total_value: { 
      type: Number
    }
  },
  
  {
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema);
