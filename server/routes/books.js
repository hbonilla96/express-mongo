import express from "express";
import booksService from "../services/books.service";
var router = express.Router();

/* GET all books. */
router.get("/", function(req, res) {
  booksService.getAll(function(err, result) {
    res.json(result);
  });
});

/* GET book by name. */
router.get("/byName", function(req, res) {
  booksService.findBookByName(req.query.name, function(err, result) {
    res.json(result);
  });
});

/* DELETE book. */
router.delete("/delete", function(req, res) {
  booksService.deleteByName(req.query.name, function(err, result) {
    res.send({
      status: 200,
      message: "succes"
    });
  });
});

/* CREATE book. */
router.post("/save", function(req, res, next) {
  booksService.createBook(req.body);
  res.send({
    status: 200,
    message: "success"
  });
});

router.put("/:id", (req, res) => {
  booksService.updateById(req.params.id, req.body, (err, result) => {
    res.json(result);
  });
});

export default router;
