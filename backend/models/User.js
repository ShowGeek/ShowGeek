const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  avatar: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Show' }]
});

module.exports = mongoose.model('User', userSchema);
