const {Schema, model} = require('mongoose');

const consumerSchema = new Schema ( 
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
        description: { 
            type: String,
            required: true, 
        },
        orders: [{ 
            type: Schema.Types.ObjectId,
            ref: "order",
        }],
    },

    { 
       timestamps: true,
    }, 
);

module.exports = model("Consumer", consumerSchema);
