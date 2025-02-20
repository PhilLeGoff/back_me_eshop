const productRepository = require('../repositories/productRepository');

exports.getProducts = async () => {
  try {
    return await productRepository.findAll();
  } catch (error) {
    throw error;
  }
};



//formulaire
exports.createProduct = async (productData) => {
  return await productRepository.createProduct(productData);
};

exports.createProduct = async (productData) => {
  try {
    return await productRepository.create(productData);
  } catch (error) {
    throw error;
  }
};

exports.updateProduct = async (id, productData) => {
  try {
    return await productRepository.update(id, productData);
  } catch (error) {
    throw error;
  }
};

exports.deleteProduct = async (id) => {
  try {
    return await productRepository.delete(id);
  } catch (error) {
    throw error;
  }
};
