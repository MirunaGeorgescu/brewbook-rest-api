const authController = require('../controllers/authController.js');
const router = require('express').Router();
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRole = require ('../middleware/authorizeRole'); 

// logging in a user
router.post('/login', authController.login); 

// displaying all the users in the database
router.get('/users', authenticateUser, authorizeRole(['Admin']), authController.getAllUsers);

// adding a new user to the database 
router.post('/users', authenticateUser, authorizeRole(['Admin']),  authController.createUser);

module.exports = router;
