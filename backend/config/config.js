require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DEV,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": process.env.USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_TEST,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.USER,
    "password": process.env.DB_PASS,
    "database": "database_production",
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
}
