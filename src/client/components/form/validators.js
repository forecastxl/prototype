// Validator functions (used in combination with redux-form)

// Reference:
// http://redux-form.com/6.7.0/examples/fieldLevelValidation

export const required = value => (value ? undefined : 'Dit veld is verplicht')
