var express = require('express'),
	hbs = require('express3-handlebars'),
	forms = require('./lib/load')('./forms'),
	port = 3950,
	app = express();

app.engine('html', hbs({extname: '.html'}));
app.set('view engine', 'html');

app.get('/', function (req, res, next) {
	res.send('formist examples');
});

app.get('/fieldset', function (req, res, next) {
	res.send(forms.fieldset.render());
});

app.get('/bootstrap', function (req, res, next) {
	res.render('standard', {
		form: bootstrap.render()
	});
});

app.get('/bootstrap-inline', function (req, res, next) {
	res.render('standard', {
		form: forms['bootstrap-inline'].render()
	});
});

app.get('/bootstrap-horizontal', function (req, res, next) {
	res.render('standard', {
		form: forms['bootstrap-horizontal'].render()
	});
});

app.get('/everything', function (req, res, next) {
	res.send(forms.everything.render());
});

app.get('/without-fieldset', function (req, res, next) {
	res.send(forms.withoutFieldset.render());
});

var server = app.listen(port, function () {

	console.log('formist-example is listening on %s', server.address().port);

});