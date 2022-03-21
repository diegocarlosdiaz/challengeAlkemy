module.exports = (sequelize, DataTypes) => {

    let alias = "Personaje_pelicula"

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        personaje_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        pelicula_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

      
    }

    let config = {
        timestamps: false
    }

    const Personaje_pelicula = sequelize.define(alias,cols,config)

    Personaje_pelicula.associate = function(models) {

    Personaje_pelicula.belongsTo(models.Pelicula, {

        foreignKey: "pelicula_id",
        as: "pelicula"
    })

    Personaje_pelicula.belongsTo(models.Personaje, {

        foreignKey: "personaje_id",
        as: "personaje"
    })

    }

    return Personaje_pelicula



    
}