const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users
router.get('/', userController.getUsers);

// POST a new user
router.post('/', userController.createUser);

// Add product to basket
router.post('/basket', userController.addToBasket);

// Remove product from basket
router.delete('/basket/:productId', userController.removeFromBasket);
router.get('/basket/:userId', userController.getBasket);

module.exports = router;
