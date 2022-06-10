const express = require('express');
const app = express();
const path = require('path');
const index = require('./routes/index');
const user = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000, ()=>{
  console.log('Servidor funcionando');});

app.use('/', index);
app.use('/login', user);
app.get('/register', user);
app.get('/productcart', index);
app.get('/productdetail', index);
