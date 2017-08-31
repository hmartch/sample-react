var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
var portNum = 2000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(portNum, function () {
  var host = server.address().address;
  var port = server.address().port;

  //console.log('App listening at http://%s:%s', host, port);
});

app.use(bodyParser.json({ type: 'application/json' }));
app.use(expressValidator());

var postgres = require('./lib/postgres');

var visitorRouter = express.Router();

function validateVisitor(req, res, next) {
  req.checkBody('name', 'Invalid name').notEmpty();
  req.checkBody('moviename', 'Invalid moviename').notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var response = { errors: [] };
    errors.forEach(function(err) {
      response.errors.push(err.msg);
    });
    res.statusCode = 400;
    return res.json(response);
  }
  return next();
 }

visitorRouter.post('/visitors', validateVisitor, function(req, res) { 
  var sql = 'INSERT INTO visitors (name, moviename) VALUES ($1,$2) RETURNING id';
  // retrieve the data to insert
  var data = [
    req.body.name, 
    req.body.moviename
  ];
  postgres.client.query(sql, data, function(err, result) {
    if (err) {
      // shield client from internal errors, but log them
      console.error(err);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create visitor']
      });
    }
    var newVisitorId = result.rows[0].id;
    var sql = 'SELECT * FROM visitors WHERE id = $1';
    postgres.client.query(sql, [ newVisitorId ], function(err, result) {
      if (err) {
        // shield client from internal errors, but log them
        console.error(err);
        res.statusCode = 500;
        return res.json({
          errors: ['Could not retrieve visitor after create']
        });
      }
      // The request created a new resource object
      res.statusCode = 201;
      // The result of CREATE should be the same as GET
      res.json(result.rows[0]);
    });
  });
});

//app.use('/visitors', visitorRouter);

module.exports = app;