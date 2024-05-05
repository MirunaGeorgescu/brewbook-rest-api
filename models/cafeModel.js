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
    }, {
        tableName: 'cafes' // specify that the table name should be cafes, not caves 
    }); 

    return Cafe; 
};
