const Genero = require("./Genero")

module.exports =(sequelize, DataTypes) => {

    let alias = "User"

      let cols = {  id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull:false 
        },

        email: {
            type: DataTypes.STRING,
            allowNull:false
        },

        } 
        
        
     
        let config = { 
        tableName: "user",
        timestamps: false
        }
    

   const User = sequelize.define(alias, cols, config)

   return User

    }