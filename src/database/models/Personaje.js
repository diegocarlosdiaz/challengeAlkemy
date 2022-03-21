module.exports = (sequelize, DataTypes) => {

    let alias = "Personaje"

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

        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        Peso: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        Historia: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Peliculas_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }

    let config = {
        timestamps: false
    }

    const Personaje = sequelize.define(alias,cols,config)

    Personaje.associate = function (models) {
    
        Personaje.hasMany(models.Personaje_pelicula, {
            foreignKey: "personaje_id",
            as: "personaje"
        })
    }

    return Personaje

    
}