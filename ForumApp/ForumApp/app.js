console.log("App is starting");
var express = require('express');
var ejs = require('ejs');
var app = express();
app.set("view engine", "ejs");

app.use('/public',express.static('public'));

var server = app.listen(3000, listening);


function listening() {
  console.log("listening");
};

app.get("/", function (request, response) {

  console.log();("working");
//    response.send("yo")

    response.render('index.ejs'); 
});
