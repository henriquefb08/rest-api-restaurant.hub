const { Schema, model } = require("mongoose");

const Order = new Schema(
  {
    order_id: {
      type: Number,
      required: true,
    },
    Item_id: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
