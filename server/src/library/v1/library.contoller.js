const Book = require('../../models/Book');

const details = (req, res, next) => {
  //  return a list of all api routes
  res.json({ message: 'Hello from router' });
};

const addBook = (req, res, next) => {
  try {
    const book = new Book({ ...req.body });
    book.save();
    res.json({ message: 'Added a new book', book });
  } catch (err) {
    res.status(422);
    const error = new Error('Failed to save book in the database');
    next(error);
  }
};

const getBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.json({ message: `Get book with id: ${id}`, book });
  } catch (_) {
    res.status(404);
    const error = new Error('Book Not Found');
    next(error);
  }
};

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find().sort({ created_at: -1 }).exec();

    res.json({ message: 'List of books, sorted from latest to oldest', books });
  } catch (err) {
    res.status(500);
    const error = new Error('Could not fetch books from database');
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findOneAndDelete({ _id: id });
    res.json({ message: `Deleted book with id: ${id}` });
  } catch (err) {
    res.status(404);
    const error = new Error('Book Not Found');
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = { ...req.body };
    const book = await Book.findOneAndUpdate({ _id: id }, update);
    res.json({ message: `Update book with id: ${id}`, book });
  } catch (err) {
    res.status(500);
    const error = new Error('Update error');
    next(error);
  }
};

module.exports = {
  addBook,
  getBook,
  getBooks,
  updateBook,
  deleteBook,
  details,
};
