'use strict';
let express = require('express');
let app = express();
let logger = require('morgan');
let bodyParser = require('body-parser');
app.use(express.static('./public'));

app.listen(3000);
// let db = mongoose.connection;

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/museumrApp');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connection');
});


let artists = require('./controllers/artist_controller');

app.use('/artists', artists);
