"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.belongsToMany(models.location, { through: "userLocations" });
    }

    validPassword(passwordTyped) {
      return bcrypt.compareSync(passwordTyped, this.password);
    }

    // remove the password before serializing
    toJSON() {
      let userData = this.get();
      delete userData.password;
      return userData;
    }
  }

  user.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.TEXT,
      msgIds: DataTypes.ARRAY(DataTypes.INTEGER),
      age: DataTypes.INTEGER,
      zipcode: DataTypes.INTEGER,
      settings: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  user.beforeCreate((pendingUser, options) => {
    if (pendingUser && pendingUser.password) {
      // hash the password
      let hash = bcrypt.hashSync(pendingUser.password, 12);
      // store the hash as the user's password
      pendingUser.password = hash;
    }
  });

  return user;
};
