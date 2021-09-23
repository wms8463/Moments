'use strict';






module.exports = (sequelize, DataTypes) => 
  sequelize.define('Activity', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  
});