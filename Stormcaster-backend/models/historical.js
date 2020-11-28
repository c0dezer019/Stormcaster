'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  historical.init({
    lid: DataTypes.UUID,
    locales: DataTypes.ARRAY(DataTypes.JSON),
    weatherDATA: DataTypes.ARRAY(DataTypes.JSON)
  }, {
    sequelize,
    modelName: 'historical',
  });
  return historical;
};