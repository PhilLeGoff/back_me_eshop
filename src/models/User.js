// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { // required for authentication
    type: String,
    required: true,
  },
  isAdmin: { // flag for admin users
    type: Boolean,
    default: false,
  },
  basket: [{ // array of references to Product documents
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

module.exports = mongoose.model('User', userSchema);
