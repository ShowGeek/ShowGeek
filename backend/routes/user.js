const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const User = require('../models/User');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
};

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user.id).populate('favorites');
  res.json(user);
});

router.post('/avatar', auth, upload.single('avatar'), async (req, res) => {
  const user = await User.findById(req.user.id);
  user.avatar = `/uploads/${req.file.filename}`;
  await user.save();
  res.json({ avatar: user.avatar });
});

module.exports = router;
