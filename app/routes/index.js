/*jslint node: true */
"use strict";

var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
	var db = req.app.get('db');
	db.collection('recipes').find().toArray(function (err, data) {
		if (err) {
			return console.log(err);
		} else {
			res.render('index', {
				pageTitle: 'Home',
				pageID: 'home',
				recipes: data
			});
		}
	});
});

module.exports = router;
