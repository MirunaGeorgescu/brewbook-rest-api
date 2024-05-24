const productController = require('../controllers/productController.js');
const router = require('express').Router();
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRole = require('../middleware/authorizeRole'); 
const validateIdParam = require('../middleware/validateId');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /products/createProduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               cafeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product created successfully
 *       403:
 *         description: Forbidden
 */
router.post('/createProduct', authenticateUser, authorizeRole(['Admin']), productController.createProduct);

/**
 * @swagger
 * /products/allProducts:
 *   get:
 *     summary: Retrieve all products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all products
 *       404:
 *         description: No products found
 */
router.get('/allProducts', authenticateUser, productController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *       404:
 *         description: Product not found
 */
router.get('/:id', authenticateUser, validateIdParam, productController.getProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               cafeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */
router.put('/:id', authenticateUser, authorizeRole(['Admin', 'Editor']), validateIdParam, productController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */
router.delete('/:id', authenticateUser, authorizeRole(['Admin', 'Editor']), validateIdParam, productController.deleteProduct);

/**
 * @swagger
 * /products/{id}/getProductReviews:
 *   get:
 *     summary: Get all reviews associated with a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: List of product reviews
 *       404:
 *         description: Product not found
 */
router.get('/:id/getProductReviews', authenticateUser, validateIdParam, productController.getProductReviews);

module.exports = router;
