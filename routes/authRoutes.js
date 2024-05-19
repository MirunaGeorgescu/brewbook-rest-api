const authController = require('../controllers/authController.js');
const router = require('express').Router();
const authenticateUser = require('../middleware/authenticateUser');

// displaying all the users in the database
router.get('/users', authenticateUser, authController.getAllUsers);

// adding a new user to the database 
router.post('/users', authenticateUser, authController.createUser);

//logging in a user
router.post('/login', authenticateUser, authController.login); 

module.exports = router;