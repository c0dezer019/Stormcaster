require("dotenv").config();

module.exports = {
  development: {
    user: process.env.USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DEV,
    host: process.env.HOST,
    dialect: "postgres",
  },
  test: {
    user: process.env.USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres",
  },
  production: {
    user: process.env.USER,
    password: process.env.DB_PASS,
    database: process.env.DB_PROD,
    host: process.env.HOST,
    dialect: "postgres",
  },
};
