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
    <>
      {props.books.map((book, i) => (
        <p key={i}>{book.title}</p>
      ))}
    </>
  );
};

export default BookList;
