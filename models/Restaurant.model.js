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
            type: String,
            enum: ["Japonesa", "Brasileira", "Italiana", 'Francesa', "Indiana", "Fast Food", "Outros"]
        },
        description: { 
            type: String,
            required: true, 
        },
        menu: [{ 
            type: Schema.Types.ObjectId,
            ref: "item",
        }],
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
