const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); 
// controllers require
const indexdb = require('./routes/indexdb');

const index = require('./routes/index');
const user = require('./routes/users');
const product = require('./routes/product');
const session = require('express-session')
const cookieParser = require('cookie-parser');
//const bcrypt = require('bcryptjs');

//middleware
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(session({
	secret: "frase secreta",
	resave: false,
	saveUninitialized: false,
}));


app.use(cookieParser());
app.use(userLoggedMiddleware);

app.listen(3000, ()=>{
  console.log('Servidor funcionando');});

app.use('/', indexdb);

app.use('/', index);
app.use('/', user);
app.use('/', product);

app.use((err, req, res, next) => {
  
  res.status(err.status || 404);
  res.render('not-found');
});