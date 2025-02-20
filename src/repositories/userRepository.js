const User = require('../models/User');

exports.findAll = async () => {
  return await User.find({});
};

exports.create = async (data) => {
  const user = new User(data);
  return await user.save();
};
