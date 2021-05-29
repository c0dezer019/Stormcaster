"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.location.belongsToMany(models.user, { through: "userLocations" });
    }
  }
  location.init(
    {
      zipcode: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.CHAR,
      coords: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "location",
    }
  );
  return location;
};
