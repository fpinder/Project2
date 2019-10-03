/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    food_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    food_ing: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  });
  return Food;
};