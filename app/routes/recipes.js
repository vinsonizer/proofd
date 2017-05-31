/*jslint node: true */
"use strict";

var express = require('express');
var router = express.Router();

router.get('/recipes', function (req, res) {
	res.render('recipe', {
		pageTitle: 'Recipe',
		pageID: 'recipe'
	});
}).post('/recipes', function (req, res) {
	var db = req.app.get('db');
	db.collection('recipes').save(req.body, function (err, result) {
		if (err) {
			return console.log(err);
		}
	});
	res.redirect('/');
});

module.exports = router;
