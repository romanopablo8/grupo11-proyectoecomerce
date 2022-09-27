// Created by M.C. Antonio González.
const models = require("../models/index.js");
//const models          = require( './models' );
const { QueryTypes } = require("sequelize");
//const mySqlConnection = require( './database' );

const sequelize = {
  create: async (modelName, newRecord) => {
    return await models[modelName].create(newRecord);
  },

  destroy: async (modelName, where) => {
    return await models[modelName].destroy(where);
  },

  findAll: async (modelName, options) => {
    let query = {};

    if (options.attributes !== undefined) query.attributes = options.attributes;

    if (options.where !== undefined) query.where = options.where;

    if (options.order !== undefined) query.order = options.order;

    if (options.limit !== undefined) query.limit = options.limit;

    if (options.offset !== undefined) query.offset = options.offset;

    if (options.include !== undefined) {
      let modelsArray = [];

      for (let i = 0; i < options.include.length; i++) {
        let modelIncluded = options.include[i];
        let settings = {};

        settings.model = models[modelIncluded.model];

        if (modelIncluded.as !== undefined) settings.as = modelIncluded.as;

        if (modelIncluded.attributes !== undefined)
          settings.attributes = modelIncluded.attributes;

        modelsArray.push(settings);
      }

      query.include = modelsArray;
    }

    return await models[modelName].findAll(query);
  },

  findAndCountAll: async (modelName, options) => {
    let query = {};

    if (options.attributes !== undefined) query.attributes = options.attributes;

    if (options.where !== undefined) query.where = options.where;

    if (options.order !== undefined) query.order = options.order;

    if (options.limit !== undefined) query.limit = options.limit;

    if (options.offset !== undefined) query.offset = options.offset;

    return await models[modelName].findAndCountAll(query);
  },

  query: async (query, bind, type) => {
    return await mySqlConnection.query(query, {
      bind: bind,
      type: QueryTypes[type],
    });
  },

  update: async (modelName, updatedData, where) => {
    return await models[modelName].update(updatedData, where);
  },
};

module.exports = sequelize;
