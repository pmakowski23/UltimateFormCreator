# ultimateFormCreator

## Frontend

### made with love ❤️

## Backend

### Database

User

- name: String
- websites urls: [String]
- forms: [refs to Form]

Form

- \_id: String
- formFields: [embeded FormField]

FormField

- !label: String,
- !field-type: String,
- !isRequired: Boolean,
- placeholder: String,
- target: String,
- isDisabled: isDisabled,
- minValue: String,
- maxValue: String (required for range and number field-types)
- Select: Select (required when field-type is checkbox, select or radio)
- pattern: String

Select (select, checkbox or radio)

- !whichIsIt: Number (select:1, checkbox:2, radio:3)
- !values: [String],
- !defaultChecked: [Boolean], (defaultChecked.len === values.len)
