const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all users
router.get('/', productController.getProducts);

// POST a new user
router.post('/', productController.createProduct);
router.delete('/', productController.deleteProduct);
router.put('/id', productController.updateProduct);
router.get('/search', productController.searchProductByName);

module.exports = router;
