"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _books = _interopRequireDefault(require("../services/books.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET all books. */


router.get("/", function (req, res) {
  _books["default"].getAll(function (err, result) {
    res.json(result);
  });
});
/* GET book by name. */

router.get("/byName", function (req, res) {
  _books["default"].findBookByName(req.query.name, function (err, result) {
    res.json(result);
  });
});
/* DELETE book. */

router["delete"]("/delete", function (req, res) {
  _books["default"].deleteByName(req.query.name, function (err, result) {
    res.send({
      status: 200,
      message: "succes"
    });
  });
});
/* CREATE book. */

router.post("/save", function (req, res, next) {
  _books["default"].createBook(req.body);

  res.send({
    status: 200,
    message: "success"
  });
});
router.put("/:id", function (req, res) {
  _books["default"].updateById(req.params.id, req.body, function (err, result) {
    res.json(result);
  });
});
var _default = router;
exports["default"] = _default;