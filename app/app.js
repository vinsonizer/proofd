/*jslint node: true */
"use strict";

var express = require('express');
var reload = require('reload');
var http = require('http');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', 'app/views');

MongoClient.connect('mongodb://localhost/proofd-dev', function (err, database) {
	if (err) {
		return console.log(err);
	}
	app.set('db', database);
});

app.use(bodyParser.urlencoded({
	extended: true
}));

app.locals.siteTitle = 'Proofd';

app.use(express['static']('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/recipes'));


var server = http.createServer(app);

reload(server, app);

server.listen(app.get('port'), function () {
	console.log("Listening on port " + app.get('port'));
});
