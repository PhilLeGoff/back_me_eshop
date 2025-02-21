const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async () => {
  return await userRepository.findAll();
};

exports.createUser = async (userData) => {
  return await userRepository.create(userData);
};

exports.addProductToBasket = async (userId, productId) => {
  // Fetch user to check current basket contents.
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  if (user.basket.includes(productId)) {
    throw new Error("Product already in basket");
  }
  return await userRepository.addToBasket(userId, productId);
};

exports.removeProductFromBasket = async (userId, productId) => {
  // Fetch user to verify the product is in the basket.
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  if (!user.basket.includes(productId)) {
    throw new Error("Product not found in basket");
  }
  return await userRepository.removeFromBasket(userId, productId);
};

exports.getBasketProducts = async (userId) => {
  try {
    return await userRepository.getBasketProducts(userId);
  } catch (error) {
    throw error;
  }
};