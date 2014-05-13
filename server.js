var express = require('express'),
	hbs = require('express3-handlebars'),
	routes = require('./lib/load')('./routes'),
	port = 3950,
	app = express();

// setup the view engine
app.engine('html', hbs({extname: '.html'}));
app.set('view engine', 'html');

// setup the routes
app.get('/', routes['home']);
app.get('/fieldsets', routes['fieldsets']);
app.get('/bootstrap', routes['bootstrap']);
app.get('/bootstrap-inline', routes['bootstrap-inline']);
app.get('/bootstrap-horizontal', routes['bootstrap-horizontal']);
app.get('/everything', routes['everything']);
app.get('/without-fieldset', routes['without-fieldset']);

// serve static files
app.use(express.static('./public'));

// fire up the server
var server = app.listen(port, function () {
	console.log('formist-example is listening on %s', server.address().port);
});