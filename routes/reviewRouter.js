const reviewController = require('../controllers/reviewController');
const authenticateUser = require('../middleware/authenticateUser');
const validateIdParam = require('../middleware/validateId');
const router = require('express').Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management
 */

/**
 * @swagger
 * /reviews/createReview:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Review created successfully
 *       403:
 *         description: Forbidden
 */
router.post('/createReview', authenticateUser, reviewController.createReview);

/**
 * @swagger
 * /reviews/allReviews:
 *   get:
 *     summary: Retrieve all reviews
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all reviews
 *       404:
 *         description: No reviews found
 */
router.get('/allReviews', authenticateUser, reviewController.getAllReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Retrieve a review by ID
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The review ID
 *     responses:
 *       200:
 *         description: Review retrieved successfully
 *       404:
 *         description: Review not found
 */
router.get('/:id', authenticateUser, validateIdParam, reviewController.getReview);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review by ID
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The review ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Review updated successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Review not found
 */
router.put('/:id', authenticateUser, validateIdParam, reviewController.updateReview);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The review ID
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Review not found
 */
router.delete('/:id', authenticateUser, validateIdParam, reviewController.deleteReview);

module.exports = router;
