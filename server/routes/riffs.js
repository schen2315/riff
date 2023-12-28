
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`received request for riffs! with query=${req.query.riff}`);
  res.send(`Generating song with ${req.query.riff}`);
});

module.exports = router;