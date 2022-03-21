module.exports =(sequelize, DataTypes) => {

    const User = sequelize.define("User", {

        id: {
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

        }, {
     
        tableName: "user",
        timestamps: false

    })

   
   return User

}