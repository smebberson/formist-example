
/* GET / */

module.exports = function homeRoute (req, res, next) {

	res.render('home', {
		title: 'Formist examples'
	});

};