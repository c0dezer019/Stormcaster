require('dotenv').config()

module.exports = {
  "development": {
    "user": process.env.USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "user": process.env.USER,
    "password" : process.env.DB_PASS,
    "database": process.env.DB,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "gamelib",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
