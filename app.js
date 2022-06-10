const express = require('express');
const app = express();
const path = require('path');

const index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000, ()=>{
  console.log('Servidor funcionando');});

app.use('/', index);
app.use('/login', index);
app.get('/register', index);
app.get('/productcart', index);
app.get('/productdetail', index);


// una ruta para productos . controller // productDetail  y productCar
// una ruta para index . controller  
// una ruta login . controller
// una ruta para registo . controller