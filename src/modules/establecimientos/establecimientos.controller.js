const Establecimiento = require('./establecimientos.schema');

const EstablecimientoController = {

    // +agregar_mesa() : None
    agregarMesa: function (req, res) {
        Establecimiento.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            mesas: req.body.push(new Mesa(
                0,
                0,
                null,
                null,
                0,
                false,
            )),
            empleados: req.body.empleados,
            meseros: req.body.meseros,
            menu: req.body.menu,
            cocina: req.body.cocina,
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +eliminar_mesa(mesa: Mesa) : None
    eliminarMesa: function (req, res) {
        Establecimiento.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            mesas: req.body.mesas.filter(item => item.id !== req.body.Mesa.id),
            empleados: req.body.empleados,
            meseros: req.body.meseros,
            menu: req.body.menu,
            cocina: req.body.cocina,
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +agregar_empleado(empleado: Empleado) : : None
    agregarEmpleado: function (req, res) {
        Establecimiento.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            mesas: req.body.mesas,
            empleados: req.body.empleados.push(req.body.Empleado),
            meseros: req.body.meseros,
            menu: req.body.menu,
            cocina: req.body.cocina,
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +eliminar_empleado(empleado: Empleado) : : None
    eliminarEmpleado: function (req, res) {
        Establecimiento.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            mesas: req.body.mesas,
            empleados: req.body.empleados.filter(item => item.id !== req.body.Empleado.id),
            meseros: req.body.meseros,
            menu: req.body.menu,
            cocina: req.body.cocina,
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +agregar_mesero(mesero: Mesero) : None
    agregarMesero: function (req, res) {
        Establecimiento.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            mesas: req.body.mesas,
            empleados: req.body.empleados,
            meseros: req.body.meseros.push(req.body.Mesero),
            menu: req.body.menu,
            cocina: req.body.cocina,
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +eliminar_mesero(mesero: Mesero) : None
    eliminarMesero: function (req, res) {
        Establecimiento.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            mesas: req.body.mesas,
            empleados: req.body.empleados,
            meseros: req.body.meseros.filter(item => item.id !== req.body.Mesero.id),
            menu: req.body.menu,
            cocina: req.body.cocina,
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // repartir_propinas() : float
};

module.exports = EstablecimientoController;