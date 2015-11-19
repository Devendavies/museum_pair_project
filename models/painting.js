'use strict'
let mongoose = require('mongoose');

let paintingSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  year_made: String,
  created_at: Date,
  updated_at: Date
});

let painting = mongoose.model('painting', paintingSchema);

module.exports = painting;
