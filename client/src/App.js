import { useState, useEffect } from 'react';
import './App.css';
import NavComponent from './components/nav/NavbarComponent';
import FormComponent from './components/form/FormComponent';
import BookList from './components/core/BookList';
import axios from 'axios';
import { Button, Spinner } from 'reactstrap';

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
  const [bookList, setBookList] = useState([...mockdb]);

  const handleSubmit = async (payload) => {
    try {
      const post = axios.post('http://localhost:5333/library/', payload);
      console.log(post);
      setBookList([payload, ...bookList]);
    } catch (error) {
      console.log(error);
    }
  };

  const testFunction = async () => {
    const payload = await axios.get('http://localhost:5333/library/');
    setBookList(payload.data.books);
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
    }
  };

  useEffect(() => {
    async function loadBooks() {
      const payload = await axios.get('http://localhost:5333/library/');
      setBookList(payload.data.books);
      setIsLoading(false);
    }
    setIsLoading(true);
    loadBooks();
  }, []);

  return (
    <div className='App'>
      <NavComponent />

      <main className='container mt-5'>
        <Button onClick={testFunction}>Get Books</Button>
        <FormComponent action={handleSubmit} />
        {isLoading ? (
          <Spinner color='light' />
        ) : (
          <BookList books={bookList} deleteBook={deleteBook} />
        )}
      </main>
    </div>
  );
}

export default App;
