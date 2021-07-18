const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Book = require('../../models/Book');

// [x] ability to add a book
// [x] ability to delete a book
// [ ] ability to update a book
// [x] ability to get all books
// [x] ability to get one specific book

// router.get('/detail', (req, res, next) => {
//  return a list of all api routes
//   res.json({ message: 'Hello from router' });
// });

router.post(
  '/',
  body('title').notEmpty().isString(),
  body('author').notEmpty().isString(),
  body('pages').notEmpty().isNumeric(),
  (req, res, next) => {
    // don't forget to add validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const book = new Book({ ...req.body });
    book.save();
    res.json({ message: 'Not yet implemented - Add book' });
  }
);

router.get('/', async (req, res, next) => {
  const books = await Book.find();
  res.json({ message: 'Not yet implemented - Get all books', books });
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.json({ message: 'Not yet implemented - Get book with id', book });
  } catch (err) {
    res.json({ message: 'Book not found', err });
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndDelete({ _id: id });
    res.json({ message: 'Deleted book with id: ' + id });
  } catch (error) {
    res.json({ message: 'error', error });
  }
});

router.put('/:id', async (req, res, next) => {
  // implement validation
  const { id } = req.params;
  const update = { ...req.body };
  try {
    const book = await Book.findOneAndUpdate({ _id: id }, update);
    res.json({ message: 'Not yet implemented - Update book' });
  } catch (err) {
    res.json({ message: 'error', err });
  }
});

module.exports = router;
