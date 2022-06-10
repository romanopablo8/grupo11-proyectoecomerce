const express = require('express');
const app = express();
const path = require('path');
const index = require('./routes/index');
const user = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));



app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});



app.use('/', index);

app.use('/login', user);

app.get('/register', (req,res)=>{
  res.sendFile(__dirname + '/views/register.html');
});
app.get('/productCart', (req,res)=>{
  res.sendFile(__dirname + '/views/productCart.html');
});
app.get('/productDetail', (req,res)=>{
  res.sendFile(__dirname + '/views/productDetail.html');
});


// una ruta para productos . controller // productDetail  y productCar
// una ruta para index . controller  
// una ruta login . controller
// una ruta para registo . controller