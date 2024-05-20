const productController = require('../controllers/productController.js');
const router = require('express').Router();
const authenticateUser = require('../middleware/authenticateUser');
const authorizeRole = require ('../middleware/authorizeRole'); 
const validateIdParam = require('../middleware/validateId')

// for creating a product
router.post('/createProduct', authenticateUser, authorizeRole(['Admin']), productController.createProduct);

// for displaying all the products
router.get('/allProducts', authenticateUser, productController.getAllProducts);

// for displaying one product based on the provided id
router.get('/:id', authenticateUser, validateIdParam, productController.getProduct);

// for editing a product that already exists 
router.put('/:id', authenticateUser, authorizeRole(['Admin', 'Editor']), validateIdParam, productController.updateProduct);

// for deleting a product that already exists
router.delete('/:id', authenticateUser,  authorizeRole(['Admin', 'Editor']), validateIdParam, productController.deleteProduct);

// for getting all the reviews associated with a product 
router.get('/:id/getProductReviews', authenticateUser, validateIdParam, productController.getProductReviews); 

module.exports = router;
