// Schema para guardar empleados en la base de datos mongoDB
const {Schema, model} = require('mongoose');

class Empleado{
    constructor(nombre, apellido, edad, estatus, tag){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.estatus = estatus;
        this.tag = tag;
    }
}
 
const empleadoSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    estatus: {type: String, required: true},
    tag: {type: String, required: true},
});

module.exports = model('empleados', empleadoSchema);