import { useState, useEffect } from 'react';
import './App.css';
import NavComponent from './components/nav/NavbarComponent';
import FormComponent from './components/form/FormComponent';
import BookList from './components/core/BookList';
import axios from 'axios';
import { Alert } from 'reactstrap';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (payload) => {
    try {
      const {
        data: { book },
      } = await axios.post('http://localhost:5333/library/', payload);
      console.log(book);
      setBookList([book, ...bookList]);
    } catch (error) {
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
      await axios.delete(`http://localhost:5333/library/${id}`);
      setBookList(newBookList);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    async function loadBooks() {
      try {
        const payload = await axios.get('http://localhost:5333/library/');
        setBookList(payload.data.books);
      } catch (err) {
        setErrorMessage(err.message);
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
