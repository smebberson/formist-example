var express = require('express'),
	hbs = require('express3-handlebars'),
	fieldset = require('./forms/fieldset'),
	bootstrap = require('./forms/bootstrap'),
	bootstrapInline = require('./forms/bootstrap-inline'),
	everything = require('./forms/everything'),
	withoutFieldset = require('./forms/withoutFieldset'),
	port = 3950,
	app = express();

app.engine('html', hbs({extname: '.html'}));
app.set('view engine', 'html');

app.get('/', function (req, res, next) {
	res.send('formist examples');
});

app.get('/fieldset', function (req, res, next) {
	res.send(fieldset.render());
});

app.get('/bootstrap', function (req, res, next) {
	res.render('standard', {
		form: bootstrap.render()
	});
});

app.get('/bootstrap-inline', function (req, res, next) {
	res.render('standard', {
		form: bootstrapInline.render()
	});
});

app.get('/everything', function (req, res, next) {
	res.send(everything.render());
});

app.get('/without-fieldset', function (req, res, next) {
	res.send(withoutFieldset.render());
});

var server = app.listen(port, function () {

	console.log('formist-example is listening on %s', server.address().port);

});