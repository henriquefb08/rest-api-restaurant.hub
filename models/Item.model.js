const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        name: String,
        value: Number,
        description: String,
        category: String,
    },
    {
        timestamps: true,
    },

);
module.exports = model("Item", itemSchema);

