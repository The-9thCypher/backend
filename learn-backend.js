var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("Public"));
app.get("/login-page.html", function (req, res) {
  res.sendFile(__dirname + "/" + "login-page.html");
});
app.post("/process_post", urlencodedParser, function (req, res) {
  response = {
    Username: req.body.username,
    Password: req.body.password,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at https://%s:%s", host, port);
});

// var express = require('express');
// var app = express();
// app.use(express.static('Public'));

// app.get('/login-page.html', function(req, res){
//     res.sendFile(__dirname + "/" + "login-page.html" );
// })

// app.get('/process_get', function(req, res){
//     response= {
//         Username:req.query.username,
//         Password:req.query.password
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

// var server = app.listen(8000, function(){
//     var host =server.address().address
//     var port = server.address().port
//     console.log("Example app listening at https://%s:%s", host, port)
// })


setTimeout(function timeout() {
  alert("Timeout you have been logged out of your account")
}, 100000);