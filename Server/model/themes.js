'use strict';






module.exports = (sequelize, DataTypes) => 
  sequelize.define('Theme', {
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: true
  },
  
});