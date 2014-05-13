
var forms = require('../lib/load')('./forms');

/* GET /fieldsets */

module.exports = function fieldsetsRoute (req, res, next) {

	res.render('standard', {
		title: 'Fieldset examples',
		form: forms['fieldsets'].render()
	});

};