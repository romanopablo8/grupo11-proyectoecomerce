//parametros -config -Sequealize
'use strict';
const dbConfig = require("../config/config.js");

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.development.database, dbConfig.development.username, dbConfig.development.password, {
  host: dbConfig.development.host,
  dialect: dbConfig.development.dialect,
//  operatorsAliases: false,
});

const db = {};
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//ojo las asociaaciones de la base de datos la otra forma
//const associatedModels = require( './associations' )( models );
//db.ecomerce_db = require("./Users.js")(sequelize, Sequelize);

module.exports = db;