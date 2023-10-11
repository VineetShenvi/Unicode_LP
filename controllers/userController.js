const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { username, mobile, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({
        success: false,
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password,Number( process.env.SALT));

    user = await User.create({ username, mobile, email, password: hashedPassword });

    const authToken = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      message: 'Successful registration',
      user,
      authToken,
    });
  } catch (e) {
    res.json({ error: e.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Login failed' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
  login,
};