const Pedido = require('./pedidos.schema');

/**
 * Controlador para gestionar las operaciones CRUD de pedidos.
 * @type {Object}
 */
const PedidosController = {
    /**
     * Lista todos los pedidos en la base de datos.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    listarTodosLosPedidos: function (req, res) {
        Pedido.find({}).then(response => {
            res.status(200).send(response);
        })
    },

    /**
     * Lista un pedido específico por su ID.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    listarPedidoPorId: function (req, res) {
        Pedido.findById(req.params.id).then(response => {
            res.status(200).send(response);
        })
    },

    /**
     * Crea un nuevo pedido en la base de datos.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    crearPedido: function(req, res) {
        const nuevoPedido = new Pedido({
            articulo: req.body.articulo,
            estado: req.body.estado,
            mesa: req.body.mesa
        });
        nuevoPedido.save()
        .then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },

    /**
     * Modifica un pedido existente en la base de datos.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    modificarPedido: function(req, res) {
        Pedido.findByIdAndUpdate(req.params.id, {
            articulo: req.body.articulo,
            estado: req.body.estado,
            mesa: req.body.mesa
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },

    /**
     * Borra un pedido específico por su ID.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    borrarPedido: function(req, res) {
        Pedido.findByIdAndDelete(req.params.id).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    }
};

module.exports = PedidosController;
