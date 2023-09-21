const Mesero = require('./meseros.schema');

/**
 * Controlador para gestionar las operaciones CRUD de los meseros.
 * @type {Object}
 */
const MeserosController = {
    /**
     * Lista todos los meseros en la base de datos.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    listarTodosLosMeseros: function (req, res) {
        Mesero.find({}).then(response => {
            res.status(200).send(response);
        })
    },

    /**
     * Lista un mesero específico por su ID de MongoDB.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    listarMeseroPorId: function (req, res) {
        Mesero.findById(req.params.id).then(response => {
            res.status(200).send(response);
        })
    },

    /**
     * Crea un nuevo mesero en la base de datos.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    crearMesero: function (req, res) {
        const nuevoMesero = new Mesero({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            estatus: req.body.estatus,
            mesas: [],
            pedidos: []
        });
        nuevoMesero.save()
            .then(response => {
                res.status(200).send(response);
            }).catch(error => {
                res.status(500).send(error);
            })
    },

    /**
     * Modifica un mesero existente en la base de datos.
     * @param {Object} req - Objeto de solicitud HTTP.
     * @param {Object} res - Objeto de respuesta HTTP.
     */
    modificarMesero: function (req, res) {
        Mesero.findByIdAndUpdate(req.params.id, {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            estatus: req.body.estatus,
            tag: req.body.tag
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
    borrarMesero: function (req, res) {
        Mesero.findByIdAndDelete(req.params.id).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    }

};

module.exports = MeserosController;