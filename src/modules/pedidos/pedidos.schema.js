const {Schema, model} = require('mongoose');

/**
 * Define el esquema para un pedido en la base de datos.
 * @type {Schema}
 */
const pedidoSchema = new Schema({
    articulo: [{
        type: Schema.ObjectId,
        ref: 'Articulo'
    }],
    estado: {type: String, required: true},
    mesa: {type: Number, required: true}
});

/**
 * Clase Pedido que representa un pedido en el sistema.
 */
class Pedido {
    /**
     * Constructor para la clase Pedido.
     * Inicializa un pedido con un array vacío de artículos, estado "Pendiente" y mesa 0.
     */
    constructor() {
        this.articulo = [];
        this.estado = "Pendiente";
        this.mesa = 0;
    }

    /**
     * Agrega un artículo al pedido.
     * @param {string} articulo - El ID del artículo a agregar.
     */
    agregar_articulo(articulo) {
        this.articulo.push(articulo);
    }

    /**
     * Borra un artículo específico del pedido.
     * @param {string} articulo - El ID del artículo a borrar.
     */
    borrar_articulo(articulo) {
        const index = this.articulo.indexOf(articulo);
        if (index > -1) {
            this.articulo.splice(index, 1);
        } else {
            console.log("Artículo no encontrado en el pedido.");
        }
    }
}