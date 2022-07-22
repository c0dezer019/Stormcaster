require('dotenv').config()

module.exports = {
  "development": {
    "user": process.env.USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DEV,
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "test": {
    "user": process.env.USER,
    "password" : process.env.DB_PASS,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "production": {
    "user": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "port": process.env.DATABASE_PORT,
  }
}
