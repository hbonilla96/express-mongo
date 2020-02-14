import authors from "../models/authors";
import { get } from "mongoose";

const getAll = cb => {
  authors.find({}, cb);
};

const findAuthorByName = (name, cb) => {
  authors.findOne({ name }, cb);
};

const createAuthor = author => {
  authors.create(author);
};

const deleteByName = (name, cb) => {
  authors.deleteOne({ name }, cb);
};

const updateById = (id, author, cb) => {
  authors.findByIdAndUpdate(id, author, { new: true }, cb);
};

export default {
  getAll
};
