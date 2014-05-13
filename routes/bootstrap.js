
var forms = require('../lib/load')('./forms');

/* GET /bootstrap */

module.exports = function bootstrapRoute (req, res, next) {

	res.render('bootstrap', {
		title: 'Bootstrap example',
		form: forms['bootstrap'].render()
	});

};