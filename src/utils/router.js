const router = require('express').Router();
const rutasEmpleados = require('../modules/empleados/empleados.routes');
const rutasAlimentos = require('../modules/alimentos/alimentos.routes');
const rutasPedidos = require('../modules/pedidos/pedidos.routes')
const rutasMeseros = require('../modules/mesero/meseros.routes')
const rutasEstablecimientos = require('../modules/establecimientos/establecimientos.routes')
const rutasCocinas = require('../modules/cocinas/cocinas.routes')
const prefix = '/api/v1';

router.use(`${prefix}/empleados`, rutasEmpleados);
router.use(`${prefix}/alimentos`, rutasAlimentos);
router.use(`${prefix}/pedidos`, rutasPedidos);
// router.use(`${prefix}/mesas`, rutasMesas);
router.use(`${prefix}/meseros`, rutasMeseros);
router.use(`${prefix}/establecimientos`, rutasEstablecimientos);
router.use(`${prefix}/cocinas`, rutasCocinas);



module.exports = router;