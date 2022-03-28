const db = require('../database/models');
const { Op } = require("sequelize");

const moviesControllers = {
    list: (req, res) => {
        db.Pelicula.findAll()
            .then(movies => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: movies.length
                    },
                    data: movies
                }

                res.json(respuesta)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });

    },

    detail: (req, res) => {
        db.Pelcula.findByPk(req.params.id)
            .then(movie => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: '/movies/:id'
                    },
                    data: movie
                }
                res.json(respuesta);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    create: (req, res) => {
        db.Pelicula.create(
            {
                include: [
                    { association: "personajes" },
                    { association: "peliculas" }
                ]
            },
            {
                Imagen: req.body.Imagen,
                Titulo: req.body.Titulo,
                FechaDeCreacion: req.body.FechaDeCreacion,
                Calificacion: req.body.Calificacion,

            }).then(confirm => {


                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "movies/create"
                        },

                        data: confirm


                    }
                }
                else {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "movies/create"
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

        let movieId = req.params.id;
        db.Personaje.update({
            Imagen: req.body.Imagen,
            Titulo: req.body.Titulo,
            FechaDeCreacion: req.body.FechaDeCreacion,
            Calificacion: req.body.Calificacion,

        },
            {
                where: {
                    id: movieId
                }
            }).then(confirm => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: "movies/update/:id"
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

    delete: (req, res) => {
        let movieId = req.params.id
        db.Personaje.destroy({ where: movieId, force: true })
            .then(confirm => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: 'movies/delete/:id'
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

    search: (req, res) => {
        db.Pelicula.findAll({
            include: [{association: "personajes" },
                      {association: "peliculas" }],
            where: {
                Titulo: {
                    [Op.substring]: req.query.search
                }
            }
        },
            {
                order: [
                    ['FechaDeCreacion', 'DESC' ]
                ]
            }) .then(movies => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: movies.length,
                        url: '/movies/search/:Titulo'
                    },
                    data: movies
                }
                    res.json(respuesta);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },





}

module.exports = moviesControllers