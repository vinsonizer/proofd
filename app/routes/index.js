/*jslint node: true */
"use strict";

var express = require('express');
var router = express.Router();
var recipeModel = require('../model/recipeModel');


router.get('/', function (req, res) {
  var db = req.app.get('db'),
    handler = function (err, data) {
      if (err) {
        return console.log(err);
      } else {
        if(req.query.format == "json") {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({ data: data }));
        } else {
          res.render('index', {
            pageTitle: 'Home',
            pageID: 'home',
            recipes: []
          });
        }
      }

    };
  recipeModel.getAll(db, handler);
});

module.exports = router;
