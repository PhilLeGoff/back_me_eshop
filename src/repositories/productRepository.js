const Product = require('../models/Product');

exports.findAll = async (page, limit) => {
  const skip = (page - 1) * limit;
  return await Product.find().skip(skip).limit(limit);
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};

exports.create = async (data) => {
  const product = new Product(data);
  return await product.save();
};

exports.update = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

exports.delete = async (id) => {
  return await Product.findByIdAndDelete(id);
};

exports.searchProductByName = async (query) => {
  const products = await Product.find({
    name: { $regex: query, $options: 'i' }
  });
  return products
};