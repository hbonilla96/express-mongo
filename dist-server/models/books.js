"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _db["default"].Schema;
var bookSchema = new Schema({
  name: String,
  description: String,
  publishDate: Date,
  gender: String,
  language: String,
  pages: Number
}, {
  strict: true
});

var _default = _db["default"].model("books", bookSchema);

exports["default"] = _default;