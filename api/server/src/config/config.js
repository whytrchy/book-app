require('dotenv').config(); 

module.exports = {
  "development": {
    "username": "postgres",
    "password": "passw0rd",
    "database": "books",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "passw0rd",
    "database": "book_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
