var formist = require('formist'),
	form,
	fieldset;

form = new formist.Form({
	action: '/basic',
	method: 'post',
	attributes: {
		role: 'form'
	}
});

form.add(new formist.Field('input', {
	type: 'text',
	label: 'First name',
	attributes: {
		name: 'firstname',
		id: 'firstname'
	}
}));

form.add(new formist.Field('input', {
	type: 'text',
	label: 'Surname',
	attributes: {
		name: 'surname',
		id: 'surname'
	}
}));

form.add(new formist.Field('input', {
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

form.add(new formist.Field('select', {
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

form.add(new formist.Field('input', {
	label: 'Username',
	attributes: {
		name: 'username'
	}
}));

form.add(new formist.Field('input', {
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