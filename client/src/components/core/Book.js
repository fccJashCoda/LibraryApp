import { Button } from 'reactstrap';

const Book = (props) => {
  const { book } = props;

  return (
    <div key={book._id}>
      <p>{book.title}</p>
      <p>status: {book.read ? 'read' : 'not yet read'}</p>
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
