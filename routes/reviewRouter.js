// import the controller
const reviewController = require('../controllers/reviewController');
const authenticateUser = require('../middleware/authenticateUser');

const router = require('express').Router();

// for creating a new review 
router.post('/createReview', authenticateUser, reviewController.createReview);

// fro getting all teh reviews stored in the database 
router.get('/allReviews', authenticateUser, reviewController.getAllReviews);

// for getting one of the reviews by id
router.get('/:id', authenticateUser, reviewController.getReview);

// for updating an existing review
router.put('/:id', authenticateUser, reviewController.updateReview);

// for deleting an existing review
router.delete('/:id', authenticateUser, reviewController.deleteReview);

module.exports = router;
