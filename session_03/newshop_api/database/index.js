const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'dbshop',
  port: 3306,
  multipleStatements: true,
});

module.exports = db;