const express = require('express');
const router = express.Router();
const cocinaController = require('./cocinas.controller');

router.put('/:id', cocinaController.agregarCocinero); // UPDATE general de empleados

router.put('/:id', cocinaController.eliminarCocinero); // UPDATE empleado

router.put('/:id', cocinaController.prepararPedido); // UPDATE empleado

router.put('/:id', cocinaController.tomarPedido); // UPDATE empleado

router.put('/:id', cocinaController.servirPedido); // UPDATE empleado
module.exports = router;