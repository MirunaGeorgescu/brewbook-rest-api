module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },

        description:{
            type: DataTypes.TEXT
        }, 

        price: {
            type: DataTypes.FLOAT, 
            allowNull: false
        }

    }); 

    return Product; 
}; 