var formist = require('formist'),
	form,
	fieldset;

form = new formist.Form({
	attributes: {
		role: 'form'
	},
	theme: {
		field: function (label, content, field) {
			return '<div class="form-group">' + label + content + '</div>';
		},
		fieldgroup: {
			field: function (label, content, field) {

				// if we're dealing with a radio or checkbox input tag, re-render the input inside the label
				if (field.tag === 'input' && (field.options.type === 'radio' || field.options.type === 'checkbox') && field.options.label) {

					return '<div class="' + field.options.type + '"><label>' + content + ' ' + field.options.label.label + '</label></div>';

				}

				// if we're dealing with an input that isn't radio or checkbox, just output the actual tag itself
				return content;

			}
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

fieldset = form.add(new formist.Fieldset({
	legend: 'Contacting you'
}));

fieldset.add(new formist.Fieldgroup({
	label: 'How frequently would you like to recieve account balance information?'
}, [
		new formist.Field('input', {
			type: 'radio',
			label: 'Daily',
			attributes: {
				name: 'frequency',
				value: 'daily'
			}
		}),
		new formist.Field('input', {
			type: 'radio',
			label: 'Weekly',
			attributes: {
				name: 'frequency',
				value: 'weekly'
			}
		})
	]
));

form.add(new formist.Field('button', {
	value: 'Save',
	attributes: {
		'class': 'btn btn-default'
	}
}));

module.exports = form;