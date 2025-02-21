const User = require('../models/User');

exports.findAll = async () => {
  return await User.find({});
};

exports.findById = async (userId) => {
  return await User.findById(userId);
};

exports.create = async (data) => {
  const user = new User(data);
  return await user.save();
};

exports.addToBasket = async (userId, productId) => {
  return await User.findByIdAndUpdate(
    userId,
    { $push: { basket: productId } },
    { new: true }
  );
};

exports.removeFromBasket = async (userId, productId) => {
  return await User.findByIdAndUpdate(
    userId,
    { $pull: { basket: productId } },
    { new: true }
  );
};

exports.getBasketProducts = async (userId) => {
  return await User.findById(userId).populate('basket');
};