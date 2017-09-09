/*jslint node: true */
/*jslint nomen: true */
"use strict";

var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var recipeModel = require('../model/recipeModel');

router.get('/recipes', function(req, res) {
  var db = req.app.get('db'),
    handler = function(err, data) {
      if (err) {
        return console.log(err);
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
          data: data,
          itemsCount: data.length
        }));
      }
    };
  recipeModel.getAll(db, handler);
});

router.get('/recipes/:recipeId', function(req, res) {
  var db = req.app.get('db'),
    handler = function(err, recipe) {
      if (err) {
        throw new Error(err);
      }
      res.render('recipe', {
        pageTitle: 'Recipe',
        pageID: 'recipe',
        recipe: recipe,
        formMethod: 'PUT'
      });
    };

  recipeModel.getById(
    db,
    req.params.recipeId,
    handler
  );
});

router.delete('/recipes', function(req, res) {
  var db = req.app.get('db'),
    handler = function(err, result) {
      if (err) {
        res.send(500, err);
      } else {
        res.send({
          message: "Delete Successful"
        });
      }
    };
  recipeModel.deleteOne(
    db,
    req.body._id,
    handler
  );
});

router.post('/recipes', function(req, res) {
  var db = req.app.get('db'),
    handler = function(err, result) {
      if (err) {
        throw new Error(err);
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result.ops[0]));
    };
  recipeModel.save(
    db,
    req.body,
    handler
  );
});

router.put('/recipes', function(req, res) {
  var db = req.app.get('db'),
    handler = function(err, result) {
      if (err) {
        return console.log(err);
      }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result.value));
    };
  recipeModel.update(
    db,
    req.body._id,
    req.body,
    handler
  );
});

module.exports = router;
