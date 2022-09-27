const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const apiUserssRouter = require("./routes/api/users");
const apiProductRouter = require("./routes/api/products");
// controllers require
const dbproduct = require("./routes/dbproduct");
const dbuser = require("./routes/dbuser");

const index = require("./routes/index");
const user = require("./routes/users");
const product = require("./routes/product");
const session = require("express-session");
const cookieParser = require("cookie-parser");
//const bcrypt = require('bcryptjs');

//middleware
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use(
  session({
    secret: "frase secreta",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());
app.use(userLoggedMiddleware);

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use("/", dbproduct);
app.use("/", dbuser);

app.use("/", index);
app.use("/", user);
app.use("/", product);

app.use("/api/users", apiUserssRouter);
app.use("/api/products", apiProductRouter);

/* app.use((err, req, res, next) => {
  
  res.status(err.status || 404);
  res.render('not-found');
}); */
