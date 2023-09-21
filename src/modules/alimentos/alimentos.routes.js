const express = require('express');
const router = express.Router();
const alimentoController = require('./alimentos.controller');

router.get('/', alimentoController.listarTodosLosAlimentos); // READ general de alimento

router.get('/:id', alimentoController.listarAlimentoPorId); // READ de alimento por id

router.post('/', alimentoController.crearAlimento); // CREATE alimento

router.put('/:id', alimentoController.modificarAlimento); // UPDATE alimento

router.delete('/:id', alimentoController.borrarAlimento); // DELETE alimento
module.exports = router;