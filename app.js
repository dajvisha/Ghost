var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');
var expressValidator = require('express-validator');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var dashRouter = require('./routes/dash');
var registerRouter = require('./routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressValidator());

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/dash', dashRouter);
app.use('/register', registerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Handlebars configuration 
var hbs = require('hbs');
var fs = require('fs');

var partialsDir = __dirname + '/views/partials';
var filenames = fs.readdirSync(partialsDir);

filenames.forEach(function(filename) {
  var matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
