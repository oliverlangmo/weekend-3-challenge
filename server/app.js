var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended:false } );
var doMathModule = require('../modules/doMathModule');
var calculate = require('../modules/doMathModule');
var returnText;

var server = app.listen(8080, 'localHost', function(){
  console.log('server is listening');
});

// app.use('/*',express.static(path.join(__dirname, '../server')));
app.get("/*", function(request,response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "../public/", file));
});

app.post( '/doMathModule', urlencodedParser, function( req, res, next){
  var one = Number(req.body.x);
  var two = Number(req.body.y);
  res.send('Solution: ' + calculate(one, two, req.body.type));

});
app.use(express.static('./server'));