"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("../models/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createUser = function createUser(user) {
  _users["default"].create(user);
};

var getAll = function getAll(cb) {
  _users["default"].find({}, cb);
};

var findUserByEmail = function findUserByEmail(email, cb) {
  _users["default"].findOne({
    email: email
  }, cb);
};

var deleteByEmail = function deleteByEmail(email) {
  _users["default"].deleteOne({
    email: email
  });
};

var _default = {
  createUser: createUser,
  getAll: getAll,
  findUserByEmail: findUserByEmail
};
exports["default"] = _default;