var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    museum: req.app.get('museumFile').museum,
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
