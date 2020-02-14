"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _books = _interopRequireDefault(require("../models/books"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAll = function getAll(cb) {
  _books["default"].find({}, cb);
};

var findBookByName = function findBookByName(name, cb) {
  _books["default"].findOne({
    name: name
  }, cb);
};

var createBook = function createBook(book) {
  _books["default"].create(book);
};

var _default = {
  createBook: createBook,
  getAll: getAll,
  findBookByName: findBookByName
};
exports["default"] = _default;