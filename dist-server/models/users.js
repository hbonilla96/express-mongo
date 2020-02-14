"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _db["default"].Schema;
var userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String
}, {
  strict: true
});

var _default = _db["default"].model("users", userSchema);

exports["default"] = _default;