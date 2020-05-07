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
  connection.query('SELECT reviews.id, reviews.stars, DATE_FORMAT(reviews.uploadDate, "%c/%e/%Y") "uploadDate", reviews.restaurantVisit, reviews.content, reviews.emojiUseful, reviews.emojiFunny, reviews.emojiCool, reviews.reply, DATE_FORMAT(reviews.replyDate, "%c/%e/%Y") "replyDate", users.userName, restaurants.restaurantName FROM reviews INNER JOIN users ON users.id = reviews.userID INNER JOIN restaurants ON restaurants.id = reviews.restaurantID', (error, results) => {
    if (error) {
      console.log('unable to get reviews from db');
      callback(error, null);
    } else {
      connection.query('SELECT picURL, userID, reviewID FROM pictures', (err, data) => {
        if (err) {
          console.log('unable to get pics for reviews from db');
          callback(err, null);
      } else {
        for (let i = 0; i < results.length; i++) {
          results[i].pictures = [];
          for (let j = 0; j < data.length; j++) {
            if (results[i].id === data[j].reviewID) {
              results[i].pictures.push(data[j].picURL);
            }
          }
        }
        callback(null, results);
      }
    })
  }
  });
};

const allPics = (callback) => {
  connection.query('SELECT * FROM pictures', (error, results) => {
    if (error) {
      console.log('Failed to get pictures from DB');
    } else {
      let resultString = JSON.stringify(results);
      let parseResult = JSON.parse(resultString);
      console.log('Successfully got pictures from DB');
      callback(parseResult);
    }
  });
};

module.exports.allReviews = allReviews;
module.exports.allPics = allPics;
