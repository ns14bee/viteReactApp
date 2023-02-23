import React, { useState } from "react";
import BookData from "../../setup/data/BookData";

const Books = ({
  books: { id, image, title, description },
  HandleRemoveBook,
}) => {
  return (
    <article className="book d-flex">
      <img src={image} width="150" height="200" alt={title} />
      <div className="p-3 ">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <button type="button" onClick={() => HandleRemoveBook(id)}>
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

const BookList = () => {
  const [BooksData, setBooksData] = useState(BookData);
  const HandleRemoveBook = (id) => {
    const UpdateBookData = BooksData.filter((book) => book.id !== id);
    setBooksData(UpdateBookData);
  };
  return (
    <section className="main-body d-flex flex-wrap">
      {BooksData.map((book) => {
        return (
          <Books
            key={book.id}
            books={book}
            HandleRemoveBook={HandleRemoveBook}
          />
        );
      })}
    </section>
  );
};

export default BookList;
