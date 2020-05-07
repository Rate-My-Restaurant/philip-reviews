const express = require('express');
const db = require('../database/index.js');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser());

app.get('/reviews', (req, res) => {
  db.allReviews((error, data) => {
    if (error) {
      console.log(error);
      res.status(404).send('error GET request on reviews');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/pictures', (req, res) => {
  db.allPics((data, error) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
