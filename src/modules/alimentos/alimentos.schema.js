const { Schema, model } = require('mongoose');

class Alimento {
    constructor(nombre, precio, tipo, descripcion, imagen, ingredientes, veces_pedido) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.ingredientes = ingredientes;
        this.veces_pedido = veces_pedido;

    }
};

const alimentoScehma = new Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    ingredientes: { type: [String] },
    veces_pedido: { type: Number, required: true }
});
module.exports = model('Alimento', alimentoScehma);
