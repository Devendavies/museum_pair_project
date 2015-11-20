'use strict';
let express = require('express');
let router = express.Router();
//is it okay that this is already defined?
let Artist = require('../models/artists');

router.route('/')
  .get((req, res, next) => {
    Artist.find({}, function(err, artists) {
      res.json(artists);
      next();
    });
  })
  .post((req, res, next) => {
    console.log(req.body);
    var newartist = new Artist(req.body);
      // WHAT BEN GAVE US
    Artist.save(newartist, function(err, createdArtist) {
      console.log("artist was created");
    })
    res.send(req.body);
    next();
  });

router.route('/:id')
  .get((req,res, next) => {
    var idOfArtist = req.params.id;
    Artist.find({id: id})
  })

module.exports = router;
