const Alimento = require('./alimentos.schema');

const AlimentosController = {
    listarTodosLosAlimentos: function (req, res) { // READ sin filtros
        // Funcion que permite listar todos los alimentos desde la base de datos mostrando su ID de mongo

        Alimento.find({}).then(response => {
            res.status(200).send(response);
        })
    },
    listarAlimentoPorId: function (req, res) { // READ con filtro de id
        //Funcion que permite obtener un alimento mediante la ID dado por mongo
        Alimento.findById(req.params.id).then(response => {
            res.status(200).send(response);
        })
    },
    crearAlimento: function (req, res) { // CREATE para un alimento
        //Funcion que permite crear un alimento dentro de la base de datos. Necesita todos los parametros del modelo
        const nuevoAlimento = new Alimento({
            nombre: req.body.nombre,
            precio: req.body.precio,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            ingredientes: req.body.ingredientes,
            veces_pedido: 0
        });
        nuevoAlimento.save()
            .then(response => {
                res.status(200).send(response);
            }).catch(error => {
                res.status(500).send(error);
            })
    },
    modificarAlimento: function (req, res) {// UPDATE para un alimento
        //Funcion que permite modificar un alimento dentro de la base de datos. Necesita todos los parametros del modelo
        Alimento.findByIdAndUpdate(req.params.id, { // Buscar por id y actualizar
            nombre: req.body.nombre,
            precio: req.body.precio,
            tipo: req.body.tipo,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            ingredientes: req.body.ingredientes
        }).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    },
    borrarAlimento: function (req, res) {// Borra un alimento usando su ID
        //Funcion que permite borrar un alimento dentro de la base de datos utilizando el ID dado por Mongo
        Alimento.findByIdAndDelete(req.params.id).then(response => {
            res.status(200).send(response);
        }).catch(error => {
            res.status(500).send(error);
        })
    }
}

module.exports = AlimentosController;