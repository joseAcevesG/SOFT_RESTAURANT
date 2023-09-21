const { Schema, model } = require('mongoose');
const EmpleadoTemplate = require('../empleados/empleados.schema')
const AlimentosTemplate = require('../alimentos/alimentos.schema')
const AlimentosController = require('../alimentos/alimentos.controller')
class MeseroTemplate extends EmpleadoTemplate {
    constructor(nombre, apellido, edad, estatus) {
        super(nombre, apellido, edad, estatus);
        this.mesas = [];
        this.pedidos = [];
    }


    asignar_mesa(mesa) {
        this.mesas.push(mesa);
    }
    tomar_pedido(mesa) {
        this.pedidos.push(mesa);
    }
    servir_pedido(mesa, pedido) {
        pedido.estado = 'Entregado';
    }
    calcularCuenta(pedido) {
        const articulos = pedido.articulos
        const total = 0.0;
        articulos.forEach(articulo => {
            total += articulo.precio;
        });

        return total;
    }

    cobrar_persona(persona) {
        Pedido = require('./pedidos.schema');
        pedido;

        Pedido.find({}).then(response => {
            pedido = response;
        })

        const totalPersona = 0.0
        pedido.forEach(articulo => {
            totalPersona += articulo.precio;
            AlimentosController.listarAlimentoPorId(pedido.ObjectId)
        });

        return totalPersona
    }

    cobrar_mesa(mesa, forma) {
        const pedidosDict = mesa.pedidos
        const dict = {}
        const total = 0.0;

        if (forma == 'Individual') {
            for (let key in pedidosDict) {
                const pedido = pedidosDict[key];
                dict[key] = this.cobrar_persona(pedido);
            }
        } else {
            for (let key in pedidosDict) {
                const pedido = pedidosDict[key];
                total += this.calcularCuenta(pedido);
            }
            const numMesa = mesa.numero
            const strMesa = numMesa.toString();

            dict = {
                strMesa: total
            }
        }

        return dict;

    }



}

const meseroSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    estatus: { type: String, required: true },
    mesas: {
        type: [{
            type: Schema.ObjectId,
            ref: 'Mesa'
        }]
    },
    pedidos: {
        type: [{
            type: Schema.ObjectId,
            ref: 'Pedido'
        }]
    }
});

module.exports = model('Mesero', meseroSchema);