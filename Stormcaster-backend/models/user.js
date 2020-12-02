'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.belongsToMany(models.location, { through: 'userLocations'})
    }
  };
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.TEXT,
    msgIds: DataTypes.ARRAY(DataTypes.INTEGER),
    birthdate: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER,
    locations: DataTypes.ARRAY(DataTypes.TEXT),
    settings: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};