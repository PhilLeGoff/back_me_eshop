const productRepository = require('../repositories/productRepository');

exports.getProducts = async (page, limit) => {
  try {
    return await productRepository.findAll(page, limit);
  } catch (error) {
    throw error;
  }
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

exports.searchProductByName = async (query) => {
  try {
    return await productRepository.searchProductByName(query);
  } catch (error) {
    throw error;
  }
};