var formist = require('formist'),
	form,
	fieldset;

form = new formist.Form({
	attributes: {
		role: 'form',
		'class': 'form-horizontal'
	},
	theme: {
		field: function (content, field) {
			return '<div class="form-group">' + content + '</div>';
		},
		input: function (content, field) {
			return '<div class="col-sm-10">' + content + '</div>';
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
	label: {
		label: 'First name',
		attributes: {
			'class': 'col-sm-2 control-label'
		}
	},
	attributes: {
		name: 'firstname',
		id: 'firstname',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'text',
	label: {
		label: 'Surname',
		attributes: {
			'class': 'col-sm-2 control-label'
		}
	},
	attributes: {
		name: 'surname',
		id: 'surname',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'email',
	label: {
		label: 'Email',
		attributes: {
			'class': 'col-sm-2 control-label'
		}
	},
	attributes: {
		name: 'email',
		id: 'email',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('select', {
	label: {
		label: 'Country',
		attributes: {
			'class': 'col-sm-2 control-label'
		}
	},
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
	label: {
		label: 'Username',
		attributes: {
			'class': 'col-sm-2 control-label'
		}
	},
	attributes: {
		name: 'username',
		id: 'username',
		'class': 'form-control',
		required: true
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'password',
	label: {
		label: 'Password',
		attributes: {
			'class': 'col-sm-2 control-label'
		}
	},
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
	},
	theme: {
		input: function (content, input) {
			return '<div class="col-sm-offset-2 col-sm-10">' + content + '</div>';
		}
	}
}));

module.exports = form;