
var forms = require('../lib/load')('./forms');

/* GET /everything */

module.exports = function everythingRoute (req, res, next) {

	res.render('standard', {
		title: 'Everything',
		form: forms['everything'].render()
	});

};