const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plant_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    watering: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sun: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    indoor_outdoor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant',
  }
);

module.exports = Plant;