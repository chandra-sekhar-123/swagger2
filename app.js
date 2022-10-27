const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/employee') //default port of mongodb 27017
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

const index = require('./routes/index');
const users = require('./routes/users');
const employees = require('./routes/employees');
const options = require('./routes/options');
const questions = require('./routes/questions');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // load the files from views folder in the project
app.set('view engine', 'ejs');
// var option = {
//   swaggerOptions: {
//     authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer"} }
//   }
// };

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//middle ware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.get()
app.use('/', index);
app.use('/users', users);
app.use('/employees', employees);
app.use('/options', options);
app.use('/questions', questions);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
