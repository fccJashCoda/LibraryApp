const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    default: 0,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
