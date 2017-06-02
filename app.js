var express = require("express");
var path = require("path");
var app = express();

app.set('museumFile', require('./config/museum.json'));
app.set('categorieenFile', require('./config/categorieen.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/museum_router"));
app.use(require("./routes/categorieen_router"));

app.get("/over", function(req,res) {
  res.render("over");
});

app.get("/contact", function(req,res) {
  res.render("contact");
});




app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});
