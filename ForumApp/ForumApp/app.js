// {
//   people:{
//     person[
//       username: "john",
//       password: "echo"
//       email: "f@yahoo.com"
//       issue: ""],
//     person[
//       username: "john",
//       password: "echo"
//       email: "f@yahoo.com"
//       issue: ""]
//   };
console.log("App is starting");

var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var session = require("cookie-session");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(session({secret: 'commenttopsecret'}))
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
var server = app.listen(3000, listening);


function listening() {
  console.log("listening");
}

app.use(express.static("views"));
app.use('/public', express.static('public'));

app.use(function(req, res, next){
    if (typeof(req.session.msgList) == 'undefined') {
        req.session.msgList = [];
    }
    next();
});
var m;
app.get("/", function(request, response) {

  response.render("index.ejs");
});
var pop =[];
app.post("/commentPage", function (request, response) {

  var usr = request.body.username;
  var psw = request.body.pass;
  var eml = request.body.email;


 m = {username: usr, email: eml, password :psw};

if(pop.length ==0){
  pop.push(m);
  response.render("commentPage.ejs", {files:m.username});

}else {
  for(var i=0; i<pop.length; i++){
    if((pop[i].username) != m.username){;
      pop.push(m);
      response.render("commentPage.ejs", {files:m.username});
     console.log("different user");
     break;
   }else{
    console.log(("same user"));
    response.render("index.ejs");
    }
  }
}

  fs.writeFileSync('people.json', JSON.stringify(pop), (err)=> {
      if (err) {
          console.error(err);
          return;
      };
  });

  var pep = fs.readFileSync('people.json');



});
var msgList =[];
app.post('/msgAdd', function (request, response){

  var msg = request.body.msgAdd;
  msgList.push(msg);

response.render("mBoard.ejs", {filler:msgList});

});

app.get("/home", function (request, response) {
  response.render("commentPage.ejs", {files:m.username});
});

app.get("/mBoard", function(request, response){

  response.render("mBoard.ejs", {filler:msgList});

});


app.get("/logout", function (request, response) {
  response.render("index.ejs");
});

app.post("/commentPage/login", function(request, response){
  if(m.username != pop[i].username){
    response.render("commentPage.ejs", {files:m.username});
  }else{
    response.render("index.ejs");
  }
})
