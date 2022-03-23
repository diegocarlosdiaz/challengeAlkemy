module.exports = (sequelize, DataTypes) => {

    let alias = "Pelicula"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        Imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        FechaDeCreacion: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        Calificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },


    }

    let config = {
        timestamps: false
    }

    const Pelicula = sequelize.define(alias, cols, config)

    Pelicula.associate = function (models) {

        Pelicula.belongsTo(models.Genero, {
            foreignKey: "Pelicula_id",
            as: "generos"

        })



        Pelicula.belongsToMany(models.Personaje, {

            as: "peliculas",
            through: "personaje_pelicula",
            foreignKey: "pelicula_id",
            otherKey: "personaje_id",
            timestamps: false
        })



    }

    return Pelicula


}