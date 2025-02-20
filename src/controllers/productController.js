const productService = require('../services/productService');

exports.getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ error: 'Failed to get products' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ error: 'Failed to create product' });
  }
};

exports.updateProduct = async (req, res) => {
  // Preferably, the route should be defined as '/:id'
  const id = req.params.id || req.body.id || req.query.id;
  if (!id) {
    return res.status(400).json({ error: 'Product id is required for update' });
  }
  try {
    const updatedProduct = await productService.updateProduct(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ error: 'Failed to update product' });
  }
};

exports.deleteProduct = async (req, res) => {
  // Preferably, the route should be defined as '/:id'
  const id = req.params.id || req.body.id || req.query.id;
  if (!id) {
    return res.status(400).json({ error: 'Product id is required for deletion' });
  }
  try {
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ error: 'Failed to delete product' });
  }
};
