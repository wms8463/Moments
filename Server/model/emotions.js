'use strict';





module.exports = (sequelize, DataTypes) => 
  sequelize.define('Emotion', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
});
