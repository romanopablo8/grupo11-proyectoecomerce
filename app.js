const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); 
// controllers require
const index = require('./routes/index');
const user = require('./routes/users');
const product = require('./routes/product');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({secret: "frase secreta"}))


app.listen(3000, ()=>{
  console.log('Servidor funcionando');});

app.use('/', index);
app.use('/', user);
app.use('/', product);