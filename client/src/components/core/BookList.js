import { useState, useEffect } from 'react';
import { Button, FormGroup, Form, Input, Spinner } from 'reactstrap';
import InputComponent from '../form/InputComponent';

const BookList = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <div className='mt-5'>
      <Form>
        <FormGroup>
          <InputComponent title='SearchTerm' action={handleChange} />
        </FormGroup>
      </Form>

      {searchTerm
        ? props.books
            .filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((book, i) => (
              <div key={book._id}>
                <p>{book.title}</p>
                <p>status: {book.read ? 'read' : 'not yet read'}</p>
                <Button
                  onClick={() => props.toggleRead(book._id)}
                  className='btn-info'
                >
                  Toggle read
                </Button>
                <Button
                  className='btn-danger'
                  onClick={() => props.deleteBook(book._id)}
                >
                  Delete
                </Button>
              </div>
            ))
        : props.books.map((book, i) => (
            <div key={book._id}>
              <p>{book.title}</p>
              <p>status: {book.read ? 'read' : 'not yet read'}</p>
              <Button
                onClick={() => props.toggleRead(book._id)}
                className='btn-info'
              >
                Toggle read
              </Button>
              <Button
                className='btn-danger'
                onClick={() => props.deleteBook(book._id)}
              >
                Delete
              </Button>
            </div>
          ))}

      {/* {props.books.map((book, i) => (
        <div key={book._id}>
          <p>{book.title}</p>
          <p>status: {book.read ? 'read' : 'not yet read'}</p>
          <Button
            onClick={() => props.toggleRead(book._id)}
            className='btn-info'
          >
            Toggle read
          </Button>
          <Button
            className='btn-danger'
            onClick={() => props.deleteBook(book._id)}
          >
            Delete
          </Button>
        </div>
      ))} */}
    </div>
  );
};

export default BookList;
