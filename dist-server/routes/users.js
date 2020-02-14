"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../services/users.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get("/", function (req, res) {
  _users["default"].getAll(function (err, result) {
    res.json(result);
  });
});
/* GET users listing. */

router.get("/byEmail", function (req, res) {
  _users["default"].findUserByEmail(req.query.email, function (err, result) {
    res.json(result);
  });
});
router.post("/", function (req, res, next) {
  _users["default"].createUser(req.body);

  res.send({
    status: 200,
    message: "success"
  });
});
var _default = router;
exports["default"] = _default;