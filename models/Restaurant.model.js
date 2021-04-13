const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "E-mail necessário."],
      unique: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Senha é necessario."],
    },
    categories: {
      type: String,
      enum: [
        "Japonesa",
        "Brasileira",
        "Italiana",
        "Francesa",
        "Indiana",
        "Fast Food",
        "Outros",
      ],
    },
    description: {
      type: String,
      required: true,
    },

    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],

    Items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = model("Restaurant", restaurantSchema);
