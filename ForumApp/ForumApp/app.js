console.log("App is starting");
var express = require('express');
var ejs = require('ejs');
var app = express();
app.set("view engine", "ejs");

var server = app.listen(3000, listening);


function listening() {
  console.log("listening");
}

app.get("/", function (request, response) {

  console.log();("working");

})
