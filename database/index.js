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

const allReviews = function (callback) {
  connection.query('SELECT * FROM reviews', (error, results) => {
    if (error) {
      console.log('unable to get reviews from db')
    } else {
      console.log('successfully got reviews from db')
      callback(results)
    }
  })
}

module.exports.allReviews = allReviews;