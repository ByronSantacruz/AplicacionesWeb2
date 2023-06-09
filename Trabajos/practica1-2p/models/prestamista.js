const { model, Schema } = require('mongoose');


const PrestamistaSchema = Schema(
    {
    
        id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        identificacion: {
            type: String,
            required: true
        }
    }
);


module.exports = model('Prestamista', PrestamistaSchema );