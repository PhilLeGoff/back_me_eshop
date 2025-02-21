const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToBasket = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const updatedUser = await userService.addProductToBasket(userId, productId);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeFromBasket = async (req, res) => {
  try {
    const { userId } = req.body;
    const productId = req.params.productId;
    const updatedUser = await userService.removeProductFromBasket(userId, productId);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBasket = async (req, res) => {
  const { userId } = req.params;
  try {
    const userWithBasket = await userService.getBasketProducts(userId);
    res.json(userWithBasket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};