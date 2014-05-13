
var forms = require('../lib/load')('./forms');

/* GET /bootstrap-inline */

module.exports = function bootstrapInlineRoute (req, res, next) {

	res.render('bootstrap', {
		title: 'Bootstrap (inline)',
		form: forms['bootstrap-inline'].render()
	});

};