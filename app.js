const express = require('express')
const app = express()
const path = path()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/login', (req,res)=>{
  res.sendFile(__dirname + '/views/login.html');
});
app.get('/register', (req,res)=>{
  res.sendFile(__dirname + '/views/register.html');
});
app.get('/productCart', (req,res)=>{
  res.sendFile(__dirname + '/views/productCart.html');
});
app.get('/productDetail', (req,res)=>{
  res.sendFile(__dirname + '/views/productDetail.html');
});


