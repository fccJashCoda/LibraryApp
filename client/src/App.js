import { useState } from 'react';
import './App.css';
import NavComponent from './components/nav/NavbarComponent';
import FormComponent from './components/form/FormComponent';
import BookList from './components/core/BookList';

function App() {
  const [bookList, setBookList] = useState([
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
  ]);

  const handleSubmit = (payload) => {
    setBookList([payload, ...bookList]);
  };

  return (
    <div className='App'>
      <NavComponent />

      <main className='container mt-5'>
        <FormComponent action={handleSubmit} />
        <BookList books={bookList} />

        <div className='app mt-5'>{/* <BookList /> */}</div>
      </main>
    </div>
  );
}

export default App;
