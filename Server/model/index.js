'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('moments_db', 'williamsukonik', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: 0 // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});

const files = fs.readdirSync(__dirname);

for (let file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}


db.Moment.belongsToMany(db.Emotion, {through: 'Moment_Emotion'})
db.Emotion.belongsToMany(db.Moment, {through: 'Moment_Emotion'})

db.Moment.belongsToMany(db.Activity, {through: 'Moment_Activity'})
db.Activity.belongsToMany(db.Moment, {through: 'Moment_Activity'})


db.sequelize = sequelize;
db.Sequelize = Sequelize;



module.exports = db;