const { User } = require('../models');

const authAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    if (user.role !== 'admin') {
      return res.status(400).json({ msg: 'Access denied' });
    }

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = authAdmin;
