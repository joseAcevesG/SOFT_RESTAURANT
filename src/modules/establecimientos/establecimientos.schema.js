const {Schema, model} = require('mongoose');
const cocina = require('../cocinas/cocinas.schema');

class Establecimiento {
    constructor(nombre, direccion, mesas, empleados, meseros, menu, cocina) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.mesas = mesas;
        this.empleados = empleados;
        this.meseros = meseros;
        this.menu = menu;
        this.cocina = cocina;
    }
};

const establecimientoScehma = new Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    mesas: {
        type: [{
            IdMesa: { type: String, required: true },
            mesa: {
                type: [{
                    type: Schema.ObjectId,
                    ref: 'Mesa'
                }]
            }
        }]
    },
    empleados: {
        type: [{
            IdEmpleado: { type: String, required: true },
            mesa: {
                type: [{
                    type: Schema.ObjectId,
                    ref: 'Empleado'
                }]
            }
        }]
    },
    meseros: {
        type: [{
            IdMesero: { type: String, required: true },
            mesa: {
                type: [{
                    type: Schema.ObjectId,
                    ref: 'Mesero'
                }]
            }
        }]
    },
    menu: {
        type: Schema.ObjectId,
        ref: 'Menu'
    },
    cocina: {
        type: Schema.ObjectId,
        ref: 'Cocina'
    },
});

module.exports = model('Establecimiento', establecimientoScehma);