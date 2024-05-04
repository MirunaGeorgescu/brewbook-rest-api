module.exports = (sequelize, DataTypes) => {
    const Cafe = sequelize.define("cafe", {
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        },

        location: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 

        description:{
            type: DataTypes.TEXT
        }

    }); 

    return Cafe; 
}; 