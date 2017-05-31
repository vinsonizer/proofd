var express = require('express');
var http = require('http');
var reload = require('reload');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(bodyParser.urlencoded({extended: true}));

app.locals.siteTitle = 'Proofd';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/recipes'));


var server = http.createServer(app);

reload(server, app);

server.listen(app.get('port'), function() {
  console.log("Listening on port " + app.get('port'));
});
