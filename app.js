const express = require('express')
const app = express()
const path = path()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
    res.send('Hello World!')
  })

app.get('/productDetail', (req, res) => {
    res.send('Hello World!')
  })

app.get('/productCart', (req, res) => {
    res.send('Hello World!')
  })

app.get('/register', (req, res) => {
    res.send('Hello World!')
  })

app.get('/login', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})