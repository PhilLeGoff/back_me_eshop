const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
  },
  sex: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
    default: "female",
  },
  description: {
    type: String,
    default: "",
    required: true,
  }
});

module.exports = mongoose.model('Product', productSchema);
