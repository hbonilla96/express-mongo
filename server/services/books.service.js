import books from "../models/books";

const createBook = book => {
  books.create(book);
};

export default {
  createBook
};
