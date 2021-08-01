import { useState, useEffect } from 'react';
import './App.css';
import NavComponent from './components/nav/NavbarComponent';
import FormComponent from './components/form/FormComponent';
import BookList from './components/core/BookList';
import axios from 'axios';
import { Spinner } from 'reactstrap';

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
  const [errorMessage, setErrorMessage] = useState(true);
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
      console.log(err);
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
        {errorMessage ? <>{errorMessage}</> : <></>}
        <BookList
          books={bookList}
          deleteBook={deleteBook}
          toggleRead={toggleRead}
          isLoading={isLoading}
        >
          <FormComponent action={handleSubmit} />
        </BookList>
      </main>
    </div>
  );
}

export default App;
