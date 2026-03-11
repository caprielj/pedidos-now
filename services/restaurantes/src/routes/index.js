// ============================================================
// ARCHIVO CENTRAL DE RUTAS - RESTAURANTES SERVICE
// ============================================================
// Exportación unificada de todas las rutas
// ============================================================

const express = require('express');
const router = express.Router();

// Importar rutas de módulos
const restauranteRoutes = require('./restaurantes/restaurante.routes');
const pedidoRoutes = require('./pedidos/pedido.routes');
const estadoPedidoRoutes = require('./pedidos/estado-pedido.routes');
// ============================================================
// REGISTRAR RUTAS
// ============================================================


// Restaurantes
router.use('/restaurantes', restauranteRoutes);
// Pedidos
router.use('/pedidos', pedidoRoutes);  
router.use('/estados-pedido',  estadoPedidoRoutes);
// ============================================================
// EXPORTAR ROUTER PRINCIPAL
// ============================================================

module.exports = router;
