'use strict';
let express = require('express');
let router = express.Router();

// "Painting" already defined?
let Painting = require('../models/paintings');

// See All Paintings
router.route('/')
  .get((req, res, next) => {
    Painting.find({}, function(err, paintings) {
      res.json(paintings); //send back json parsed obj
      next();
    });
  })
  .post((req, res, next) => {
    console.log(req.body); // check body contents
    var newpainting = new Painting(req.body);
    // WHAT BEN GAVE US
    Painting.save(newpainting, function(err, createdPainting) {
      console.log("New painting created"); // verify route hit
    })
    res.send(req.body);
    next();
  });

// Profile of Specific Painting
router.route('/:id')
  .get((req,res, next) => {
    var idOfPainting = req.params.id;
    Painting.find({id: id})
  })

module.exports = router;
