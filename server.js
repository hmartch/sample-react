/* Site server details */
var express = require('express');
var path = require('path');
var cors = require('cors');

var app = express();
var portNum = 2000;

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(portNum, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});