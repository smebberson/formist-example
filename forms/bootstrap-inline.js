var formist = require('formist'),
	form,
	fieldset;

form = new formist.Form({
	action: '/basic',
	method: 'post',
	attributes: {
		'class': 'form-inline'
	},
	theme: {
		field: function (label, content, field) {
			return '<div class="form-group">' + label + content + '</div>';
		}
	}
});

form.add(new formist.Field('input', {
	type: 'email',
	attributes: {
		name: 'email',
		placeholder: 'Enter email...',
		'class': 'form-control'
	}
}));

form.add(new formist.Field('input', {
	type: 'password',
	attributes: {
		name: 'password',
		'class': 'password hidden',
		placeholder: 'Password...',
		'class': 'form-control'
	}
}));

form.add(new formist.Field('input', {
	type: 'checkbox',
	label: 'Remember me',
	attributes: {
		'class': 'checkbox'
	}
}));

form.add(new formist.Field('button', {
	value: 'Sign-in',
	attributes: {
		'class': 'btn btn-primary'
	}
}));

module.exports = form;