const express = require('express');
const app = express();
const path = require('path');
const index = require('./routes/index');
const user = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public'));

app.listen(3000, ()=>{
  console.log('Servidor funcionando');});

app.use('/', index);
app.use('/', user);
app.use('/', user);
app.use('/', index);
app.use('/', index);
