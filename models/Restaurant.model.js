const {Schema, model} = require('mongoose');

const restaurantSchema = new Schema ( 
    {  
        name: {
            type: String,
            required: true
        },
        email: {
            type: String, 
             trim: true,
            required: [true, 'E-mail necessário.'],
            unique: true 
        },
        password: {
             type: String,
            required: [true, 'Senha é necessario.'],
        },
        categories: {
            type: Schema.Types.ObjectId,
            ref: "category",
        },
        description: { 
            type: String,
            required: true, 
        },
        menu: { 
            type: Schema.Types.ObjectId,
            ref: "menu",
        },
        orders: [{ 
            type: Schema.Types.ObjectId,
            ref: "order",
        }]
    },

    { 
       timestamps: true,
    } 
);

module.exports = model("Restaurant", restaurantSchema);
