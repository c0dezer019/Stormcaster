'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(36),
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
          isAlphanumeric: true,
          max: 36,
          min: 5,
        }
      },
      password: {
        type: Sequelize.STRING(99),
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          isEmail: true,
          notEmpty: true,
          notNull: true
        }
      },
      msgIds: {
        type: Sequelize.ARRAY(Sequelize.UUID)
      },
      birthdate: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isDate: true,
          notEmpty: true,
          notNull: true
        }
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      locations: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      settings: {
        type: Sequelize.JSON,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};