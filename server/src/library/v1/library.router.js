const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: 'Hello from router' });
});

module.exports = router;
