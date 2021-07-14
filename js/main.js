// function Library() {
//   const _library = [];
//   function createBook(title, author, pages, read) {
//     const book = {
//       title,
//       author,
//       pages,
//       read,
//     };
//     _library.push(book);
//     return 'New book instance';
//   }

//   function getBooks() {
//     _library.map((book) => console.log(book));
//     return 'done';
//   }

//   return {
//     createBook,
//     getBooks,
//   };
// }

// const library = new Library();

const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  library.push(book);
  return `Added ${book} to library.`;
}

function displayBook() {
  library.forEach((book) => console.log(book));
  return 'done';
}
