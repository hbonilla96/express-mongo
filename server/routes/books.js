import express from "express";
import booksService from "../services/books.service";
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res) {
  booksService.getAll(function(err, result) {
    res.json(result);
  });
});

/* GET users listing. */
router.get("/byName", function(req, res) {
  booksService.findBookByName(req.query.name, function(err, result) {
    res.json(result);
  });
});

router.post("/save", function(req, res, next) {
  booksService.createBook(req.body);
  res.send({
    status: 200,
    message: "success"
  });
});

export default router;
