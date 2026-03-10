const { HistorialEstadosPedido, EstadoPedido, Pedido } = require('../../models');

exports.getByPedido = async (req, res, next) => {
  try {
    const { pedido_id } = req.params;

    const pedido = await Pedido.findByPk(pedido_id);
    if (!pedido)
      return res.status(404).json({ success: false, message: 'Pedido no encontrado ' });

    const historial = await HistorialEstadosPedido.findAll({
      where: { pedido_id },
      include: [{ model: EstadoPedido, as: 'estado' }],
      order: [['fecha_cambio', 'ASC']]
    });

    res.json({ success: true, data: historial, count: historial.length });
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const registro = await HistorialEstadosPedido.findByPk(req.params.id, {
      include: [{ model: EstadoPedido, as: 'estado' }]
    });

    if (!registro)
      return res.status(404).json({ success: false, message: 'Registro no encontrado ' });

    res.json({ success: true, data: registro });
  } catch (error) {
    next(error);
  }
};

