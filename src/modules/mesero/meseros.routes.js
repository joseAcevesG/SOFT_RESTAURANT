const express = require('express');
const router = express.Router();
const meseroController = require('./meseros.controller'); //Metodos para la creacion, modificacion, listado y eliminacion de meseros
const meseroMetodos = require('./meseros.schema');


router.get('/', meseroController.listarTodosLosMeseros); // READ general de meseros

router.post('/', meseroController.crearMesero); // CREATE mesero

router.put('/:id', meseroController.modificarMesero); // UPDATE mesero

router.delete('/:id', meseroController.borrarMesero); // DELETE mesero

module.exports = router;
