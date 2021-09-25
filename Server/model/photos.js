





module.exports = (sequelize, DataTypes) => 
sequelize.define('Photo', {
name: {
  type: DataTypes.TEXT,
  allowNull: true,
  unique: false
},
});
