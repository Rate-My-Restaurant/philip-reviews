const express = require('express');
const app = express();
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());

app.get('/reviews', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})