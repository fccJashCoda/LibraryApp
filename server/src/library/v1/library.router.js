const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Book = require('../../models/Book');

// [x] ability to add a book
// [x] ability to delete a book
// [x] ability to update a book
// [x] ability to get all books
// [x] ability to get one specific book

router.get('/details', (req, res, next) => {
  //  return a list of all api routes
  res.json({ message: 'Hello from router' });
});

router.post(
  '/',
  body('title').notEmpty().isString(),
  body('author').notEmpty().isString(),
  body('pages').notEmpty().isNumeric(),
  (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422);
        throw new Error('Validation error');
      }
      const book = new Book({ ...req.body });
      book.save();
      res.json({ message: 'Not yet implemented - Add book', book });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res, next) => {
  const books = await Book.find().sort({ created_at: -1 }).exec();

  console.log(books);
  res.json({ message: 'for the love of sort', books });
  // const books = await Book.find().sort('created_at').exec();
  // res.json({ message: 'Not yet implemented - Get all books', books });
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.json({ message: 'Not yet implemented - Get book with id', book });
  } catch (_) {
    res.status(404);
    const error = new Error('Book Not Found');
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndDelete({ _id: id });
    res.json({ message: 'Deleted book with id: ' + id });
  } catch (_) {
    res.status(404);
    const error = new Error('Book Not Found');
    next(error);
  }
});

router.put(
  '/:id',
  body('title').notEmpty().isString(),
  body('author').notEmpty().isString(),
  body('pages').notEmpty().isNumeric(),
  body('read').isBoolean(),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422);
        throw new Error('Validation error');
      }
      const { id } = req.params;
      const update = { ...req.body };
      const book = await Book.findOneAndUpdate({ _id: id }, update);
      res.json({ message: 'Not yet implemented - Update book', book });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
