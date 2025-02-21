const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require("../middleware/upload"); // Import the multer middleware

// GET all users
router.get('/', productController.getProducts);
router.get('/search', productController.searchProductByName);
router.get('/:id', productController.getProductById);
// POST a new user
router.post('/', upload.single("image"), productController.createProduct);
router.delete('/', productController.deleteProduct);
router.put('/:id', upload.single("image"), productController.updateProduct);

module.exports = router;
