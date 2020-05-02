const mysql = require('mysql');
const mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);
connection.connect((error) => {
  if (error) {
    console.log (error);
  } else {
    console.log ('mySQL is connected!');
  }
});

module.exports = connection;