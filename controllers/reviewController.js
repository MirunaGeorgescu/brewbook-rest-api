const db = require("../models");

const Product = db.products;
const Review = db.reviews;

// create review
const createReview = async (req, res) => {
  // get the data for the review from the body
  let newReviewInfo = {
    rating: req.body.rating,
    comment: req.body.comment,
    productId: req.body.productId,
  };

  // create a new review in the database
  const review = await Review.create(newReviewInfo);

  res.status(200).send(review);
};

// get all reviews
const getAllReviews = async (req, res, next) => {
  try {
    // find all the reviews in the database
    const reviews = await Review.findAll();

    if (!reviews.length) {
      throw new Error("Reviews not found!");
    }
    res.status(200).send(reviews);
  } catch (error) {
    next(error);
  }
};

// get a review from the db by id
const getReview = async (req, res, next) => {
  try {
    // get the review id
    let reviewId = req.params.id;

    // find the review by id in the database
    let review = await Review.findOne({ where: { id: reviewId } });
    if (!review) {
      throw new Error("Review not found!");
    }
    res.status(200).send(review);
  } catch (error) {
    next(error);
  }
};

// update a review
const updateReview = async (req, res) => {
  // get the review id from the http parameters
  let reviewId = req.params.id;

  // update the review based on the id
  await Review.update(req.body, { where: { id: reviewId } });

  // get the updated review and return it
  let review = await Review.findOne({ where: { id: reviewId } });

  res.status(200).send(review);
};

// delete review
const deleteReview = async (req, res) => {
  // get the review id from the http parameters
  let reviewId = req.params.id;

  // update the review from the database based on the id
  await Review.destroy({ where: { id: reviewId } });

  res.status(200).send("The review was successfully deleted!");
};

// exporting the functions so they can be accessed form the other files
module.exports = {
  createReview,
  getAllReviews,
  getReview,
  updateReview,
  deleteReview,
};
