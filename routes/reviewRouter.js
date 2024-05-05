// import the controller
const reviewController = require('../controllers/reviewController');


const router = require('express').Router();

// for creating a new review 
router.post('/createReview', reviewController.createReview);

// fro getting all teh reviews stored in the database 
router.get('/allReviews', reviewController.getAllReviews);

// for getting one of the reviews by id
router.get('/:id', reviewController.getReview);

// for updating an existing review
router.put('/:id', reviewController.updateReview);

// for deleting an existing review
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
