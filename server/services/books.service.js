import books from "../models/books";

const getAll = cb => {
  books.find({}, cb);
};

const findBookByName = (name, cb) => {
  books.findOne({ name }, cb);
};

const createBook = book => {
  books.create(book);
};

const deleteByName = (name, cb) => {
  books.deleteOne({ name }, cb);
};

const updateById = (id, book, cb) => {
  books.findByIdAndUpdate(id, book, { new: true }, cb);
};

export default {
  createBook,
  getAll,
  findBookByName,
  deleteByName,
  updateById
};
