var formist = require('formist'),
	form,
	fieldset;

form = new formist.Form({
	action: '/basic',
	method: 'post',
	attributes: {
		'class': 'form'
	}
});

fieldset = form.add(new formist.Fieldset({
	legend: 'Basic fields',
	attributes: {
		'class': 'basic'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'text',
	attributes: {
		placeholder: 'text input without label or name attribute',
		id: 'firstname'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'text',
	label: 'Label',
	attributes: {
		placeholder: 'text input with label and name',
		name: 'completeInput',
		id: 'completeteInput'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'email',
	label: 'Email',
	attributes: {
		placeholder: 'email...',
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'datetime-local',
	label: 'Datetime-local',
	attributes: {
		placeholder: 'enter a date...',
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'text',
	label: 'Disabled',
	attributes: {
		value: 'You can\'t edit this',
		id: 'disabledField',
		disabled: true
	}
}));

/**
 * Checkboxes and radio buttons
 */

fieldset = form.add(new formist.Fieldset({
	legend: 'Checkboxes and radio buttons',
	attributes: {
		'class': 'checkboxesAndRadioButtons'
	}
}));

fieldset.add(new formist.Field('input', {
	type: 'checkbox',
	label: 'Checkbox 1',
	attributes: {
	}
}));

fieldset.add(new formist.Fieldgroup({
	label: 'Mutliple checkboxes',
}, [
	new formist.Field('input', {
		label: 'Checkbox option 1',
		type: 'checkbox'
	}),
	new formist.Field('input', {
		label: 'Checkbox option 2',
		type: 'checkbox'
	}),
	new formist.Field('input', {
		label: 'Checkbox option 3',
		type: 'checkbox'
	})
]));

/**
 * Multiple fields
 */

fieldset = form.add(new formist.Fieldset({
	legend: 'Multiple fields'
}));

fieldset.add(new formist.Fieldgroup({
	label: 'Mutliple text inputs',
}, [
	new formist.Field('input', {
		type: 'text',
		attributes: {
			placeholder: 'hours'
		}
	}),
	new formist.Field('input', {
		type: 'text',
		attributes: {
			placeholder: 'minutes'
		}
	})
]));

form.add(new formist.Field('button', {
	value: 'Save'
}));

module.exports = form;