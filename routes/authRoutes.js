const authController = require('../controllers/authController.js');
const router = require('express').Router();

// displaying all the users in the database
router.get('/users', authController.getAllUsers);

//router.post('/login', authController.login); 

module.exports = router;