var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require('express-session')

var indexRouter = require('./routes/index');
var productosRouter = require('./routes/productos');
var usersRouter = require('./routes/users');
const productsApiRouter = require('./routes/api/productosApiRouter') //Rutas de api
const usuariosApiRouter = require('./routes/api/usuariosApiRouter') //Rutas de api
var recordameMiddlewares = require('./middlewares/recordameMiddlewares')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'nacho-store',
  resave : false,
  saveUninitialized : false
}));
app.use(recordameMiddlewares);

app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/users', usersRouter);
app.use('/api', productsApiRouter);
app.use('/api', usuariosApiRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
