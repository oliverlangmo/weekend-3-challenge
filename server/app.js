//basic set up stuff
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended:false } );


//function that I will pass params into related to module
var calculate = require('../modules/doMathModule');

//creates server and allows heroku to set port
var server = app.listen(process.env.PORT|| 8080,  function(){
  console.log('server is listening');
});
//serves HTML file & allows use of public folder
app.get("/*", function(request,response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "../public/", file));
});
//params for module to do math
app.post( '/doMathModule', urlencodedParser, function( req, res, next){
  var one = Number(req.body.x);
  var two = Number(req.body.y);
  res.send('Solution: ' + calculate(one, two, req.body.type));

 });
