'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  game.init({
    title: DataTypes.STRING,
    publisher: DataTypes.STRING,
    coverArtUrl: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};
