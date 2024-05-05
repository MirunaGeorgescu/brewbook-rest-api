const productController = require('../controllers/productController.js');
const router = require('express').Router();

// for creating a product
router.post('/createProduct', productController.createProduct);

// for displaying all the products
router.get('/allProducts', productController.getAllProducts);

// for displaying one product based on the provided id
router.get('/:id', productController.getProduct);

// for editing a product that already exists 
router.put('/:id', productController.updateProduct);

// for deleting a product that already exists
router.delete('/:id', productController.deleteProduct);

// for getting all the reviews associated with a product 
router.get('/:id/getProductReviews', productController.getProductReviews); 

module.exports = router;
