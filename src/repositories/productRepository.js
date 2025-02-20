const Product = require('../models/Product');

exports.findAll = async () => {
  return await Product.find({});
};

exports.create = async (data) => {
  const product = new Product(data);
  return await product.save();
};

exports.update = async (id, data) => {
  // runValidators option will ensure the update obeys your schema validation rules
  return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

exports.delete = async (id) => {
  return await Product.findByIdAndDelete(id);
};
