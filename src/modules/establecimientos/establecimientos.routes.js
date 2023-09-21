const express = require('express');
const router = express.Router();
const establecimientoController = require('./establecimientos.controller');

router.put('/:id', establecimientoController.agregarMesa); // UPDATE mesa

router.put('/:id', establecimientoController.eliminarMesa); // UPDATE mesa

router.put('/:id', establecimientoController.agregarEmpleado); // UPDATE empleado

router.put('/:id', establecimientoController.eliminarEmpleado); // UPDATE empleado

router.put('/:id', establecimientoController.agregarMesero); // UPDATE meseros

router.put('/:id', establecimientoController.agregarMesero); // UPDATE meseros

module.exports = router;