const express = require('express');
const router = express.Router();

// GET route that returns a fixed string
router.get('/', (req, res) => {
  const data = { string: 'Hey now' };
  res.render('template', { data });
});

// POST route that returns a response from the request body
router.post('/', (req, res) => {
  const originalString = req.body.string || '';
  const data = {
    originalString: originalString,
    length: originalString.length,
  };
  res.render('template', { data });
});

// GET route with a named parameter in the URL
router.get('/names/:name', (req, res) => {
  const name = req.params.name || '';
  const data = { name };
  res.render('template', { data });
});

module.exports = router;