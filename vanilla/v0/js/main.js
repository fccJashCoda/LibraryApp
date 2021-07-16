// 'use strict';

const app = document.querySelector('.app');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readStatus = document.getElementById('readStatus');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  addBookToLibrary();
  resetForm();
});

// window.onload = function () {
//   displayBooks();
// };

const storage = window.localStorage;
let library = JSON.parse(storage.getItem('libraryApp') || '[]').map(
  (book) => new Book(book.title, book.author, book.pages, book.read, book.id)
);
displayBooks();

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

Book.prototype.toggle = function () {
  this.read = !this.read;
};

function resetForm() {
  title.value = '';
  author.value = '';
  pages.value = 0;
  readStatus.checked = false;
}

function addBookToLibrary() {
  const book = new Book(
    title.value,
    author.value,
    pages.value,
    readStatus.checked,
    Math.random()
  );
  library.push(book);
  displayBooks();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const lib = JSON.stringify(library);
  storage.setItem('libraryApp', lib);
}

function deleteBookFromLibrary(id) {
  library = library.filter((book) => book.id !== id);
  displayBooks();
  saveToLocalStorage();
}

function displayBooks() {
  app.innerHTML = '';

  library.forEach((book) => {
    const card = document.createElement('div');
    card.innerHTML = buildTemplate(book);
    const deleteBtn = card.querySelector('.btn-danger');
    const toggleBtn = card.querySelector('.btn-primary');

    deleteBtn.addEventListener('click', function () {
      deleteBookFromLibrary(book.id);
    });

    toggleBtn.addEventListener('click', () => {
      book.toggle();
      displayBooks();
      saveToLocalStorage();
    });

    app.appendChild(card);
  });
  return 'done';
}

function buildTemplate(book) {
  return `
    <div class="card text-white bg-dark mb-3" style="max-width: 20rem">
      <div class="card-header">Id ${book.id}</div>
      <div class="card-body">
        <h4 class="card-title">${book.title}</h4>
        <p class="card-text">
          Author: ${book.author}
        </p>
        <p class="card-text">
          Pages: ${book.pages}
        </p>
        <p class="card-text">
          Read: ${book.read}
        </p>
        <div class='btnGroup'>
          <button class='btn btn-danger'>Delete</button>
          <button class='btn btn-primary'>Toggle read</button>
        </div>
      </div>
    </div>
  `;
}
