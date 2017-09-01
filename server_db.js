/* DB Server Details */
var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var cors = require('cors');

var db_app = express();
var portNum = 3000;

db_app.use(bodyParser.json({ type: 'application/json' }));
db_app.use(expressValidator());
db_app.use(cors());

var postgres = require('./lib/postgres');

// Your database configuration
var DATABASE_URL = 'postgres://helen:dbpass@localhost:5432/simple_db';

// Connect to mysql database
postgres.initialize(DATABASE_URL, function(err) {
  if (err) {
    throw err;
  }

  // Start listening for HTTP requests
  var db_server = db_app.listen(portNum, function() {
    var db_host = db_server.address().address;
    var db_port = db_server.address().port;

    console.log('Database (db_app) listening at http://%s:%s', db_host, db_port);
  });
});

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

db_app.get('/', function(req, res) {
  // We must end the request when we are done handling it
  res.end();
});

visitorRouter.post('/', validateVisitor, function(req, res) { 
  var sql = 'INSERT INTO visitors (name, moviename) VALUES ($1,$2) RETURNING id';
  res.header('Access-Control-Allow-Origin', "*");
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

db_app.use('/visitors', visitorRouter);

module.exports = db_app;