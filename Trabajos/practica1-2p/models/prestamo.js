const { model, Schema } = require('mongoose');

const PrestamoSchema = Schema(
    {
        idcomputadora: {
            type: Schema.Types.ObjectId,
            ref:'Computadora',
            required: [ true, 'La identificación de la computadora debe ser necesaria']
        },
        idprestamista: {
            type: Schema.Types.ObjectId,
            ref:'Prestamista',
            required: [ true, 'La identificación del prestamiesta debe ser necesario']
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        fecha:{
            type: String,
            required: [ true, 'La fecha del premio de la pelicula es necesaria'],
        },
        hora:{
            type: String,
            required: [ true, 'La hora del prestamo es necesaria'],
        },
        numerohorapres:{
            type: Number,
            required: [ true, 'El número de horas de pretamo debe ser indicado']
        }
    }
);

PrestamoSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Prestamo', PrestamoSchema );
