const express = require('express');
const router = express.Router();
const horarioController = require('../../controllers/restaurantes/horario.controller');

// GET /api/horarios - Obtener todos los horarios
router.get('/', horarioController.getAll);

// GET /api/horarios/:id - Obtener un horario por ID
router.get('/:id', horarioController.getById);

// GET /api/horarios/restaurante/:restaurante_id - Obtener horarios por restaurante
router.get('/restaurante/:restaurante_id', horarioController.getByRestaurante);

// POST /api/horarios - Crear un nuevo horario
router.post('/', horarioController.create);

// PUT /api/horarios/:id - Actualizar un horario
router.put('/:id', horarioController.update);

// DELETE /api/horarios/:id - Eliminar (inactivar) un horario
router.delete('/:id', horarioController.delete);

// PATCH /api/horarios/:id/activo - Activar/Desactivar un horario
router.patch('/:id/activo', horarioController.toggleActivo);

module.exports = router;
