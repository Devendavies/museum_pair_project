'use strict';
let express = require('express');
let router = express.Router();
//is it okay that this is already defined?
let Artist = require('../models/artists');

router.route('/')
  .get((req, res, next) => {
    Artist.find({}, function(err, artists) {
      res.send(artists);
      next();
    });
  })

router.route('/create')
  .post((req, res, next) => {
    console.log(req.body);
    // Artist.create({req.body}, function(err, createdArtist) {
    //   res.send(createdArtist);
    //   next();
    // });
  })

router.route('/:id')
  .get((req,res, next) => {
    var idOfArtist = req.params.id;
    Artist.find({id: id})
  })

module.exports = router;
