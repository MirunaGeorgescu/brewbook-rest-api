const cafeController = require('../controllers/cafeController.js');
const router = require('express').Router();

// for creating a cafe
router.post('/createCafe', cafeController.createCafe);

// for displaying all the cafes
router.get('/allCafes', cafeController.getAllCafes);

// for displaying one cafe based on the provided id
router.get('/:id', cafeController.getCafe);

// for editing a cafe that already exists 
router.put('/:id', cafeController.updateCafe);

// for deleting a cafe that already exists
router.delete('/:id', cafeController.deleteCafe);

module.exports = router;
