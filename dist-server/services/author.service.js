"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authors = _interopRequireDefault(require("../models/authors"));

var _mongoose = require("mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAll = function getAll(cb) {
  _authors["default"].find({}, cb);
};

var findAuthorByName = function findAuthorByName(name, cb) {
  _authors["default"].findOne({
    name: name
  }, cb);
};

var createAuthor = function createAuthor(author) {
  _authors["default"].create(author);
};

var deleteByName = function deleteByName(name, cb) {
  _authors["default"].deleteOne({
    name: name
  }, cb);
};

var updateById = function updateById(id, author, cb) {
  _authors["default"].findByIdAndUpdate(id, author, {
    "new": true
  }, cb);
};

var _default = {
  getAll: getAll
};
exports["default"] = _default;