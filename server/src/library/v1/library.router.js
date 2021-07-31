const express = require('express');
const router = express.Router();
const middleware = require('./library.middleware');
const controller = require('./library.contoller');

router.get('/details', controller.details);

router.post(
  '/',
  middleware.validationChain,
  middleware.validate,
  controller.addBook
);

router.get('/', controller.getBooks);

router.get('/:id', controller.getBook);

router.delete('/:id', controller.deleteBook);

router.put(
  '/:id',
  middleware.validationChain,
  middleware.validate,
  controller.updateBook
);

module.exports = router;
