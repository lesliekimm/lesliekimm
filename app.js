process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV == 'development') {
  require('dotenv').load();
}

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var config = require('./config')
, server = app.listen(config.port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', '/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

if (process.env.NODE_ENV === 'production') {
  app.locals.baseUrl = 'https://lesliekimm.herokuapp.com'
} else if (process.env.NODE_ENV === 'development') {
  app.locals.baseUrl = 'http://localhost:3000'
}

module.exports = server;

// module.exports = app;
// app.listen(80, function() {
//   console.log("Server running at http://localhost:3000");
// });