'use strict';
let mongoose = require('mongoose');

let artistSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: Number,
  description: String,
  created_at: Date,
  updated_at: Date
});

let artist = mongoose.model('artist', artistSchema);

module.exports = artist;
