const express = require('express');
const router  = express.Router();
const pedidoCtrl = require('../../controllers/pedidos/pedido.controller');
const cancelacionCtrl = require('../../controllers/pedidos/cancelacion-pedido.controller');

// Subrutas anidadas
const detalleRoutes    = require('./detalle-pedido.routes');
const historialRoutes  = require('./historial-estados-pedido.routes');
const cancelacionRoutes = require('./cancelacion-pedido.routes');

// Pedidos principales
router.get('/',    pedidoCtrl.getAll);
router.get('/:id', pedidoCtrl.getById);
router.post('/',   pedidoCtrl.create);
router.put('/:id', pedidoCtrl.update);
router.put('/:id/estado', pedidoCtrl.cambiarEstado);


// Subrutas anidadas bajo /:pedido_id
router.use('/:pedido_id/detalles',  detalleRoutes);
router.use('/:pedido_id/historial', historialRoutes);
router.use('/:pedido_id/cancelacion', cancelacionRoutes);

// Cancelaciones globales
router.get('/cancelaciones',     cancelacionCtrl.getAll);
router.get('/cancelaciones/:id', cancelacionCtrl.getById);

module.exports = router;
