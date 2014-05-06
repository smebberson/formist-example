var formist = require('formist'),
	form,
	fieldset;

form = new formist.Form({
	attributes: {
		role: 'form'
	},
	theme: {
		field: function (content, field) {
			return '<div class="form-group">' + content + '</div>';
		}
	}
});

fieldset = form.add(new formist.Fieldset({
	legend: 'Personal information',
	attributes: {
		'class': 'personalInformation'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'text',
	label: 'First name',
	attributes: {
		name: 'firstname',
		id: 'firstname',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'text',
	label: 'Surname',
	attributes: {
		name: 'surname',
		id: 'surname',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'email',
	label: 'Email',
	attributes: {
		name: 'email',
		id: 'email',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('select', {
	label: 'Country',
	options: ['Australian','United Kingdom','United States'],
	attributes: {
		name: 'country',
		id: 'country',
		'class': 'form-control',
		required: true
	}
}));

fieldset = form.add(new formist.Fieldset({
	legend: 'Account information',
	attributes: {
		'class': 'accountInformation'
	}
}));

fieldset.add(new formist.Field('input', {
	label: 'Username',
	attributes: {
		name: 'username',
		id: 'username',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'password',
	label: 'Password',
	attributes: {
		name: 'password',
		id: 'password',
		'class': 'form-control',
		placeholder: 'Enter a password with at least 6 characters',
		required: true
	}
}));

form.add(new formist.Field('button', {
	value: 'Save',
	attributes: {
		'class': 'btn btn-default'
	}
}));

module.exports = form;