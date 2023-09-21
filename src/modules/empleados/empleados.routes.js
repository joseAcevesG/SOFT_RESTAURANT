const express = require('express');
const router = express.Router();
const empleadoController = require('./empleados.controller');

router.get('/', empleadoController.listarTodosLosEmpleados); // READ general de empleados

router.post('/', empleadoController.crearEmpleado); // CREATE empleado

router.put('/:id', empleadoController.modificarEmpleado); // UPDATE empleado

router.delete('/:id', empleadoController.borrarEmpleado); // DELETE empleado

module.exports = router;
