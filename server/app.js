var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended:false } );
var addUp = require('../modules/addModule');
var mathType;

var server = app.listen(8080, 'localHost', function(){
  console.log('server is listening');
});

// app.use('/*',express.static(path.join(__dirname, '../server')));
app.get("/*", function(request,response){
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "../public/", file));
});

// app.get('/doMath', function(req, res){
//   res.send(addUp());
//   res.end();
// });
app.post( '/formPost', urlencodedParser, function( req, res){
  // receives a POST request from the form on getTest.html
  
  res.write( 'post request received: ' + req.body.firstNumberIn );
  res.write('type of math:' + req.body.mathType);
  res.write( 'post request received: ' + req.body.secondNumberIn );
  res.end();
});
app.use(express.static('./server'));
