const { Schema, model } = require("mongoose");

const menuSchema = new Schema(
  {
    title: String,
    Items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Items",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = model("Menu", menuSchema);
