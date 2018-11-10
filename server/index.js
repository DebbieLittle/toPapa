const express = require('express');
let app = express();
var parser = require('body-parser');
let axios = require('axios');
const db = require('../database/index.js')

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});