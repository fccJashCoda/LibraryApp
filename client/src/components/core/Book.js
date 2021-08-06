import { useEffect } from 'react';
import { Button } from 'reactstrap';

const Book = (props) => {
  const { book } = props;

  useEffect(() => {
    console.log('fetching ' + book.isbn);
  }, []);

  return (
    <div key={book._id} className='mb-4 w-25'>
      <p>{book.title}</p>
      <img
        src='https://via.placeholder.com/150x250'
        alt='Book cover placeholder'
      />
      <p>status: {book.read ? 'read' : 'not yet read'}</p>
      <p>isbn: {book.isbn}</p>
      <Button onClick={() => props.toggleRead(book._id)} className='btn-info'>
        Toggle read
      </Button>
      <Button className='btn-danger' onClick={() => props.deleteBook(book._id)}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
