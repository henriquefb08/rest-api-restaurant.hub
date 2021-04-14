const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    name: String,
    value: Number,
    description: String,
    category: String,
    restaurant_id: [{
      type: Schema.Types.ObjectId,
      ref: "restaurant",
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Item", itemSchema);


