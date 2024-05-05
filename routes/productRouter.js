const productController = require('../controllers/productController.js');
const router = require('express').Router();

router.post('/createProduct', productController.createProduct);
router.get('/allProducts', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
