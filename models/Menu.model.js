const {Schema, model} = require('mongoose');

const menuSchema = new Schema( 
    { 
     title: String,
     categoriesMenu: [{ 
         type: Schema.Types.ObjectId,
        ref: "categoriesMenu", }]
    },
    { 
        timestamps: true, 
    },

);
module.exports = model("Menu", menuSchema);
