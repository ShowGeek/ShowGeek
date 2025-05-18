const express = require('express');
const Show = require('../models/Show');
const router = express.Router();

router.get('/', async (req, res) => {
  const shows = await Show.find();
  res.json(shows);
});

router.post('/', async (req, res) => {
  const show = await Show.create(req.body);
  res.json(show);
});

module.exports = router;
