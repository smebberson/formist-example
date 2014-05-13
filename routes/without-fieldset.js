
var forms = require('../lib/load')('./forms');

/* GET /without-fieldsets */

module.exports = function withoutFieldsetsRoute (req, res, next) {

	res.render('standard', {
		title: 'Without fieldset examples',
		form: forms['without-fieldset'].render()
	});

};