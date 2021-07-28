import { Button } from 'reactstrap';

const BookList = (props) => {
  const books = [
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

  return (
    <div className='mt-5'>
      {props.books.map((book, i) => (
        <>
          <p key={book._id}>{book.title}</p>
          <Button className='btn-info'>Edit</Button>
          <Button
            className='btn-danger'
            onClick={() => props.deleteBook(book._id)}
          >
            Delete
          </Button>
        </>
      ))}
    </div>
  );
};

export default BookList;
