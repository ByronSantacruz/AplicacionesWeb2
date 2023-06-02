const { model, Schema } = require('mongoose');

const PrestamistaSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del prestamista es necesaria'],
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        identificacion:{
            type: String,
            required: [ true, 'Cedula del prestamista es necesario'],
        }
    }
);

module.exports = model('Prestamista', PrestamistaSchema );
