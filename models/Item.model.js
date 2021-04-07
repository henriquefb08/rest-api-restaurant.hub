const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        Item: {
        type: String,
        ItemId: Number,
        value: Number,
       required: true,
    },
    {
        timestamps: true,
    },

);
module.exports = model("Item", itemSchema);

