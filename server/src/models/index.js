import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import sequelize from '../database/sequelize';
import sequelizeUtils from '../utils/sequelize';

const models = {};

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes); 
    models[model.name] = model;
  })

sequelizeUtils.associations(models);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;