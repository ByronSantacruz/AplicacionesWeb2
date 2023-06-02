const { model, Schema } = require('mongoose');


const ComputadoraSchema = Schema(
    {
    
        id: {
            type: Number,
            required: true,
            unique: true
        },
        descripcion: {
            type: String,
            required: true
        },
        costoxhora: {
            type: Number,
            default: 0,
            required: true
        }
    }
);


module.exports = model('Computadora', ComputadoraSchema );