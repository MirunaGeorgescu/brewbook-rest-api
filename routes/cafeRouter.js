const cafeController = require('../controllers/cafeController.js');
const router = require('express').Router();
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRole = require ('../middleware/authorizeRole'); 
const validateIdParam = require('../middleware/validateId')

// for creating a cafe
router.post('/createCafe', authenticateUser, authorizeRole(['Admin']), cafeController.createCafe);

// for displaying all the cafes
router.get('/allCafes', authenticateUser, cafeController.getAllCafes);

// for displaying one cafe based on the provided id
router.get('/:id', authenticateUser, validateIdParam,  cafeController.getCafe);

// for editing a cafe that already exists 
router.put('/:id', authenticateUser, authorizeRole(['Admin', 'Editor']), validateIdParam, cafeController.updateCafe);

// for deleting a cafe that already exists
router.delete('/:id', authenticateUser, authorizeRole(['Admin']),  validateIdParam, cafeController.deleteCafe);

// for getting all the products associated with that cafe 
router.get('/:id/getCafeProducts', authenticateUser, validateIdParam, cafeController.getCafeProducts); 

module.exports = router;
