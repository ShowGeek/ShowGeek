const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number,
  schedule: String,
  image: String,
  cast: [String]
});

module.exports = mongoose.model('Show', showSchema);
