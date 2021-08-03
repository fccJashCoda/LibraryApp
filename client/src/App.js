import { useState, useEffect } from 'react';
import './App.css';
import NavComponent from './components/nav/NavbarComponent';
import FormComponent from './components/form/FormComponent';
import BookList from './components/core/BookList';
import axios from 'axios';
import { Alert } from 'reactstrap';

const mockdb = [
  { title: 'Cats', author: 'Someone', pages: 111, read: true },
  {
    title: 'The last of the Meowcan',
    author: 'Someone',
    pages: 111,
    read: true,
  },
  { title: 'The Meowtrix', author: 'Someone', pages: 111, read: true },
  {
    title: 'Catch treat if ou can',
    author: 'Someone',
    pages: 111,
    read: true,
  },
  { title: 'The red dot', author: 'Someone', pages: 111, read: true },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (payload) => {
    try {
      const {
        data: { book },
      } = await axios.post('http://localhost:5333/library/', payload);
      setBookList([book, ...bookList]);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const displayError = (error) => {
    setErrorMessage(error);
  };

  const clearError = () => {
    setErrorMessage('');
  };

  const toggleRead = async (id) => {
    try {
      const updatedList = await Promise.all(
        bookList.map(async (book) => {
          if (book._id === id) {
            book.read = !book.read;
            await axios.put(`http://localhost:5333/library/${id}`, book);
          }
          return book;
        })
      );
      setBookList(updatedList);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      const newBookList = bookList.filter((book) => book._id !== id);
      const deletedBook = await axios.delete(
        `http://localhost:5333/library/${id}`
      );
      console.log(deletedBook.data.message);
      setBookList(newBookList);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    async function loadBooks() {
      try {
        const payload = await axios.get('http://localhost:5333/library/');
        console.log(payload.data.books);
        setBookList(payload.data.books);
      } catch (err) {
        setErrorMessage(err.message);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadBooks();
  }, []);

  return (
    <div className='App'>
      <NavComponent />

      <main className='container mt-5'>
        <BookList
          books={bookList}
          deleteBook={deleteBook}
          toggleRead={toggleRead}
          isLoading={isLoading}
          clearError={clearError}
        >
          {errorMessage ? <Alert color='danger'>{errorMessage}</Alert> : <></>}
          <FormComponent
            action={handleSubmit}
            displayError={displayError}
            clearError={clearError}
          />
        </BookList>
      </main>
    </div>
  );
}

export default App;
