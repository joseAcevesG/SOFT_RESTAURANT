const Empleado = require('./empleados.schema');

const EmpleadosController = {
    listarTodosLosEmpleados: function (req, res) { // READ sin filtros
        Empleado.find({}).then(response => {
            res.status(200).send(response);
        })
    },
    listarEmpleadoPorId: function (req, res) { // READ con filtro de id
        Empleado.findById(req.params.id).then(response => {
            res.status(200).send(response);
        })
    },
    crearEmpleado: function(req, res) { // CREATE para un empleado
        const nuevoEmpleado = new Empleado({ // Crear un nuevo empleado por medio del esquema seguido
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            estatus: req.body.estatus,
            tag: req.body.tag
        });
        nuevoEmpleado.save()
        .then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    modificarEmpleado: function(req, res) {// UPDATE para un empleado
        Empleado.findByIdAndUpdate(req.params.id, { // Buscar por id y actualizar
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            estatus: req.body.estatus,
            tag: req.body.tag
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    borrarEmpleado: function(req, res) {
        Empleado.findByIdAndDelete(req.params.id).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    }
};


module.exports = EmpleadosController;