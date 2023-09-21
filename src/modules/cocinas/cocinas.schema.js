const { Schema, model } = require('mongoose');

class Cocina {
    constructor() {
        this.cocineros = [];
        this.pedidos_entrada = [];
        this.pedidos_salida = [];
    }
}

const cocinaSchema = new Schema({
    cocineros: { type: [String], required: true }, // Use lowercase "string"
    pedidos_entrada: { type: [String], required: true }, // Use lowercase "string"
    pedidos_salida: { type: [String], required: true }, // Use lowercase "string"
});

module.exports = model('Cocina', cocinaSchema);
