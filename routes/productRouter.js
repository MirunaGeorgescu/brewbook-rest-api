const productController = require('../controllers/productController.js');
const router = require('express').Router();
const authenticateUser = require('../middleware/authenticateUser');

// for creating a product
router.post('/createProduct', authenticateUser, productController.createProduct);

// for displaying all the products
router.get('/allProducts', authenticateUser, productController.getAllProducts);

// for displaying one product based on the provided id
router.get('/:id', authenticateUser, productController.getProduct);

// for editing a product that already exists 
router.put('/:id', authenticateUser,  productController.updateProduct);

// for deleting a product that already exists
router.delete('/:id', authenticateUser, productController.deleteProduct);

// for getting all the reviews associated with a product 
router.get('/:id/getProductReviews', authenticateUser, productController.getProductReviews); 

module.exports = router;
