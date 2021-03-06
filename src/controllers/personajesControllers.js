
const db = require('../database/models');
const { Op } = require("sequelize");

const personajesControllers = {
    list: (req, res) => {
        db.Personaje.findAll()
            .then(personajes => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: personajes.length
                    },

                    data: personajes
                }

                res.json(respuesta)
            })

            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    create: (req, res) => {
        db.Personaje.create(
            {
                include: [
                    { association: "personajes" },
                    { association: "peliculas" }
                ]
            },
            {
                Imagen: req.body.Imagen,
                Nombre: req.body.Nombre,
                Edad: req.body.Edad,
                Peso: req.body.Peso,
                Historia: req.body.Historia,


            }).then(confirm => {


                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "characters/create"
                        },

                        data: confirm


                    }
                }
                else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: "characters/create"
                        },
                        data: confirm
                    }
                }

                res.json(respuesta)



            })

            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    update: (req, res) => {

        let personajeId = req.params.id;
        db.Personaje.update({
            Imagen: req.body.Imagen,
            Nombre: req.body.Nombre,
            Edad: req.body.Edad,
            Peso: req.body.Peso,
            Historia: req.body.Historia,

        },
            {
                where: {
                    id: personajeId
                }
            }).then(confirm => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: "characters/update/:id"
                    },

                    data: confirm
                }

                res.json(respuesta)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    destroy: (req, res) => {
        let personajeId = req.params.id
        db.Personaje.destroy({ where: personajeId, force: true })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'characters/delete/:id'
                        },

                        data: confirm

                    }
                }
                res.json(respuesta)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    detail: (req, res) => {
        db.Personaje.findByPk(req.params.id)
            .then(personaje => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: personaje.length,
                        url: '/characters/:id'
                    },
                    data: personaje
                }
                res.json(respuesta);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    search: (req, res) => {
        db.Personaje.findAll({
            where: {
                [Op.or]: [{
                    Nombre: {
                        [Op.substring]: req.query.search
                    }
                },

                {
                    Edad: {
                        [Op.substring]: req.query.search
                    }
                },

                {
                    Peso: {
                        [Op.substring]: req.query.search
                    }
                }

                ]
            }
        }) .then(personajes => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: personajes.length,
                    url: '/characters/search'
                },
                data: personajes
            }

            res.json(respuesta)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }


}

module.exports = personajesControllers