const { model, Schema } = require('mongoose');

const ComputadoraSchema = Schema(
    {
        descripcion:{
            type: String,
            required: [ true, 'El nombre de la computadora es necesario'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        detallestecnicos:{
            type: String,
            required: [ true, 'Detalles tecnico de la computadora es necesaria'],
        },
        costoxhora:{
            type: String,
            required: [ true, 'El costo por hora de la computadora es necesario'],
        }
    }
);


module.exports = model('Computadora', ComputadoraSchema );
