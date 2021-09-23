'use strict';





module.exports = (sequelize, DataTypes) =>
  sequelize.define('Moment', {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }

  });
