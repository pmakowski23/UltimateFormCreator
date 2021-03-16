# ultimateFormCreator


## Admin (client)
- register
- login
- add new website to your account
- add new form to webiste
- add new fields to form
- modify all of the above
- delete all of the above
- get id (form) and token (admin user) 

### available form types:
- text
- select
- checkbox
- radio
- textarea
- password
- email
- number
- date
- time
- button
- phone 

## Library (lib hosted on npm)
- add to your site by
    - creating div with id=”ultimateFormCreator-token-id” 
    - creating script tag with src = link to our cdn (hosted on npm)
- get div from site that lib is connected to with id=”ultimateFormCreator-token-id”
- send request to get data about the token and id 
    - if not valid show that in div (some error mess)
- accordingly to received data render form with all the types and values provided
   on admin site.
- handle submit with request to backend

## Backend

### Database

User

- name: String
- token (got from firebase when register for admin to put on site)

Website

- user: ref to User (admin of the website)
- name
- url

Form

- website: ref to Website (website that this site belongs to)
- genId (generated for admin to put on site)
- name
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

ReceivedForm (handle submit from form and show on site)

- form: ref to Form
- inputName: [String]
- inputValue: [String]
