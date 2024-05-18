const authController = require('../controllers/authController.js');
const router = require('express').Router();

// displaying all the users in the database
router.get('/users', authController.getAllUsers);

// adding a new user to the database 
router.post('/users', authController.createUser);

//logging in a user
router.post('/login', authController.login); 

module.exports = router;