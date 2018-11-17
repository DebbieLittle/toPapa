const express = require('express');
let app = express();
var parser = require('body-parser');
const db = require('../database/index.js')

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.get('/photos', (req, res) => {
  db.getAllPhotos((data) => {
    res.send(data)
  })
})

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});