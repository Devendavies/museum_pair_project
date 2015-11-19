'use strict';
let express = require('express');
let router = express.Router();
//is it okay that this is already defined?
let Artist = require('../models/artists');

router.route('/')
  .get((req, res, next) => {

    res.send(JSON.parse(Artists));
  })

  .post((req, res, next) => {

  });

router.route('/:id')
  .get((req,res, next) => {
    var idOfArtist = req.params.id;
    Artist.find({id: id})
  })

module.exports = router;

// index: The user should be able to view all the artists.
//
// show: The user should be able to view all the information for an artist.
// edit/update: The user should be able to edit the information for an artist.
// ?: The user should be able to show a single artist and his/her paintings.
// new/create: The user should be able to add a new artist.
// destroy: The user should be able to delete an artist.
