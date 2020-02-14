import express from "express";
import booksService from "../services/books.service";
var router = express.Router();

router.post("/save", function(req, res, next) {
  booksService.createBook(req.body);
  res.send({
    status: 200,
    message: "success"
  });
});

export default router;
