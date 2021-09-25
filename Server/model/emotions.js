'use strict';





module.exports = (sequelize, DataTypes) => 
  sequelize.define('Emotion', {
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: true
  },
});
