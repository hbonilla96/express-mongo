"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _books = _interopRequireDefault(require("../services/books.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/save", function (req, res, next) {
  _books["default"].createBook(req.body);

  res.send({
    status: 200,
    message: "success"
  });
});
var _default = router;
exports["default"] = _default;