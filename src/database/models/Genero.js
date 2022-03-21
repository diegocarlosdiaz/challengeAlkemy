module.exports = (sequelize, DataTypes) => {

    let alias = "Genero"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Pelicula_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }

    let config = {
        timestamps: false
    }

    const Genero = sequelize.define(alias,cols,config)

    Genero.associate = function (models) {
        Genero.hasMany(models.Pelicula, {
            foreignKey: "Pelicula_id" ,
            as: "peliculas"
        })
    }

    return Genero

    
}