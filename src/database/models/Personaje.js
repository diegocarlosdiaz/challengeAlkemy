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


    }

    let config = {
        timestamps: false,
        tableName: "personaje"
    }

    const Personaje = sequelize.define(alias, cols, config)

    Personaje.associate = function (models) {

        Personaje.belongsToMany(models.Pelicula, {
            as: "personajes",
            through: "personaje_pelicula",
            foreignKey: "personaje_id",
            otherKey: "pelicula_id",
            timestamps: false
        })
    }

    return Personaje


}