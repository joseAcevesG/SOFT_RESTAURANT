const Cocina = require('./cocinas.schema');

const CocinaController = {

    // +agregar_cocinero(cocinero: Cocinero) : None
    agregarCocinero: function (req, res) {
        Cocina.findByIdAndUpdate(req.params.id, {
            cocineros: req.body.cocineros.append(Empleado.findById(req.body.id_emp)),
            pedidos_entrada: req.body.pedidos_entrada,
            pedidos_salida: req.body.pedidos_salida
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +eliminar_cocinero(cocinero: Cocinero) : None
    eliminarCocinero: function (req, res) {
        Cocina.findByIdAndUpdate(req.params.id, {
            cocineros: req.body.cocineros.remove(Empleado.findById(req.body.id_emp)),
            pedidos_entrada: req.body.pedidos_entrada,
            pedidos_salida: req.body.pedidos_salida
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +preparar_pedido(pedido: Pedido) : None
    prepararPedido: function (req, res) {
        Cocina.findByIdAndUpdate(req.params.id, {
            cocineros: req.body.cocineros,
            pedidos_salida: req.body.pedidos_salida.append(Pedido.findById(req.body.id_ped)),
            pedidos_entrada: req.body.pedidos_entrada.remove(Pedido.findById(req.body.id_ped)),
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +tomar_pedido(pedido: Pedido, cocinero: Cocinero) : None
    tomarPedido: function (req, res) {
        Cocina.findByIdAndUpdate(req.params.id, {
            cocineros: req.body.cocineros,
            pedidos_salida: req.body.pedidos_salida,
            pedidos_entrada: req.body.pedidos_entrada.append(Pedido.findById(req.body.id_ped)),
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    // +servir_pedido(pedido: Pedido) : None
    servirPedido: function (req, res) {
        Cocina.findByIdAndUpdate(req.params.id, {
            cocineros: req.body.cocineros,
            pedidos_salida: req.body.pedidos_salida.findById(req.body.id_ped).cambiarEstado(),
            pedidos_entrada: req.body.pedidos_entrada,
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    }
};

module.exports = CocinaController;