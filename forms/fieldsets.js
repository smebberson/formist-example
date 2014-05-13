var formist = require('formist'),
	form,
	fieldset;

form = new formist.Form({
	action: '/basic',
	method: 'post'
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
		id: 'firstname'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'text',
	label: 'Surname',
	attributes: {
		name: 'surname',
		id: 'surname'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'email',
	label: {
		label: 'Email',
		attributes: {
			'class': 'label-class'
		}
	},
	attributes: {
		name: 'email',
		id: 'email'
	}
}));

fieldset.add(new formist.Field('select', {
	label: 'Country',
	options: [
		{
			label: 'Australian'
		},
		{
			label: 'United Kingdom',
			value: 'uk'
		},
		{
			label: 'United States',
			attributes: {
				disabled: true
			}
		}
	],
	attributes: {
		name: 'email',
		id: 'email'
	}
}));

fieldset = form.add(new formist.Fieldset({
	legend: {
		label: 'Account information',
		attributes: {
			'class': 'account'
		}
	},
	attributes: {
		'class': 'accountInformation'
	}
}));

fieldset.add(new formist.Field('input', {
	label: 'Username',
	attributes: {
		name: 'username'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'password',
	attributes: {
		name: 'password',
		'class': 'password hidden',
		placeholder: 'Without label'
	}
}));

form.add(new formist.Field('button', {
	value: 'Save'
}));

module.exports = form;