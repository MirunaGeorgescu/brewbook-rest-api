const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig.js'); 

const sequelize = new Sequelize({
    database: dbConfig.DB,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    operatorAliases: false, 

    pool: {
        max: dbConfig.pool.max, 
        min: dbConfig.pool.min, 
        acquire: dbConfig.pool.acquire, 
        idle: dbConfig.pool.idle
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected...')
    })
    .catch(err => {
        console.log('Error! ' + err)
    })

const db = {}

db.Sequelize = Sequelize; 
db.sequelize = sequelize; 

db.cafes = require('./cafeModel.js')(sequelize, DataTypes);
db.products = require('./productModel.js')(sequelize, DataTypes);
db.reviews = require('./reviewModel.js')(sequelize, DataTypes);