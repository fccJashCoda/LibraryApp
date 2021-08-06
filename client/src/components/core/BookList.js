import { useState, useEffect } from 'react';
import { FormGroup, Form, Spinner } from 'reactstrap';
import InputComponent from '../form/InputComponent';
import Book from './Book';

const BookList = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    props.clearError();
  }, [searchTerm]);

  return (
    <div className='mt-5'>
      <Form>
        <FormGroup>
          <InputComponent title='SearchTerm' action={handleChange} />
        </FormGroup>
      </Form>

      {props.children}

      <div className='d-flex flex-wrap justify-content-between'>
        {props.isLoading ? (
          <div>
            <Spinner />
          </div>
        ) : props.books.length ? (
          searchTerm ? (
            props.books
              .filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((book, i) => (
                <Book
                  key={book._id}
                  toggleRead={props.toggleRead}
                  deleteBook={props.deleteBook}
                  book={book}
                />
              ))
          ) : (
            props.books.map((book, i) => (
              <Book
                key={book._id}
                toggleRead={props.toggleRead}
                deleteBook={props.deleteBook}
                book={book}
              />
            ))
          )
        ) : (
          <>
            <p>No book in library.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BookList;
