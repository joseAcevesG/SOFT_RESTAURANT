const {Schema, model} = require('mongoose');
import {Empleado, Mesero} from './empleado';

class Mesa{
    constructor(numero, capacidad, mesero, pedidos, cantidad_personas){
        this.numero = numero;
        this.capacidad = capacidad;
        this.mesero = mesero;
        this.pedidos = pedidos;
        this.cantidad_personas = cantidad_personas;
        this.ocupado = ocupado;
    }
}

const mesaSchema = new Schema({
    numero: {type: Number, required: true},
    capacidad: {type: Number, required: true},
    mesero: {
        type: Schema.ObjectId,
        ref: 'Empleado'
    },
    pedidos: {type: [{
        type: Schema.ObjectId,
        ref: 'Pedido'
    }]},
    cantidad_personas: {type: Number, required: true},
    ocupado: {type: Boolean, required: true},
});

module.exports = model('Mesa', mesaSchema);