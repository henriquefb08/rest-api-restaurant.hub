const {Schema, model} = require('mongoose');

const categoriesMenuSchema = new Schema(
{ 
 Item: String,
 ItemId: Number, 
 value: Number, 
 required:true, 
}, 
{ 
    timestamps: true; 
},

);
module.exports = model("categoriesMenu", categoriesMenuSchema);
