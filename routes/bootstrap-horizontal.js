
var forms = require('../lib/load')('./forms');

/* GET /bootstrap-horizontal */

module.exports = function bootstrapHorizontalRoute (req, res, next) {

	res.render('bootstrap', {
		title: 'Bootstrap (horizontal)',
		form: forms['bootstrap-horizontal'].render()
	});

};