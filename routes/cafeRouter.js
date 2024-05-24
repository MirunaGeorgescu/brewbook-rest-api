const cafeController = require('../controllers/cafeController.js');
const router = require('express').Router();
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRole = require('../middleware/authorizeRole'); 
const validateIdParam = require('../middleware/validateId');

/**
 * @swagger
 * tags:
 *   name: Cafes
 *   description: Cafe management
 */

/**
 * @swagger
 * /cafes/createCafe:
 *   post:
 *     summary: Create a new cafe
 *     tags: [Cafes]
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
 *               location:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cafe created successfully
 *       403:
 *         description: Forbidden
 */
router.post('/createCafe', authenticateUser, authorizeRole(['Admin']), cafeController.createCafe);

/**
 * @swagger
 * /cafes/allCafes:
 *   get:
 *     summary: Retrieve all cafes
 *     tags: [Cafes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all cafes
 *       404:
 *         description: No cafes found
 */
router.get('/allCafes', authenticateUser, cafeController.getAllCafes);

/**
 * @swagger
 * /cafes/{id}:
 *   get:
 *     summary: Retrieve a cafe by ID
 *     tags: [Cafes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cafe ID
 *     responses:
 *       200:
 *         description: Cafe retrieved successfully
 *       404:
 *         description: Cafe not found
 */
router.get('/:id', authenticateUser, validateIdParam, cafeController.getCafe);

/**
 * @swagger
 * /cafes/{id}:
 *   put:
 *     summary: Update a cafe by ID
 *     tags: [Cafes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cafe ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cafe updated successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Cafe not found
 */
router.put('/:id', authenticateUser, authorizeRole(['Admin', 'Editor']), validateIdParam, cafeController.updateCafe);

/**
 * @swagger
 * /cafes/{id}:
 *   delete:
 *     summary: Delete a cafe by ID
 *     tags: [Cafes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cafe ID
 *     responses:
 *       200:
 *         description: Cafe deleted successfully
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Cafe not found
 */
router.delete('/:id', authenticateUser, authorizeRole(['Admin']), validateIdParam, cafeController.deleteCafe);

/**
 * @swagger
 * /cafes/{id}/getCafeProducts:
 *   get:
 *     summary: Get all products associated with a cafe
 *     tags: [Cafes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The cafe ID
 *     responses:
 *       200:
 *         description: List of cafe products
 *       404:
 *         description: Cafe not found
 */
router.get('/:id/getCafeProducts', authenticateUser, validateIdParam, cafeController.getCafeProducts);

module.exports = router;
