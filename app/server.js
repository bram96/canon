var express = require('express');
var routes = require('./routes');
var middleware = require('./middleware');
var server = express();

// We set middlewares
middleware(server);


// We set all the routes with one single call
routes(server);

//if everything fails back to index
server.use('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});


server.listen(9000);


module.exports = server;

