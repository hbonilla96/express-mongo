import express from "express";
import usersService from "../services/users.service";
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res) {
  usersService.getAll(function(err, result) {
    res.json(result);
  });
});

/* GET users listing. */
router.get("/byEmail", function(req, res) {
  usersService.findUserByEmail(req.query.email, function(err, result) {
    res.json(result);
  });
});

router.post("/", function(req, res, next) {
  usersService.createUser(req.body);
  res.send({
    status: 200,
    message: "success"
  });
});

export default router;
