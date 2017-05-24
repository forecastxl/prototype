import React from 'react'
import { string, bool, func } from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField, Checkbox } from '../../form'
import { Alert } from '../../alert'

export function DumbSignupForm({ handleSubmit, pristine, submitting, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert message={error} type={'error'} />}
      <h2>Beheerder</h2>
      <p>
        Gegevens van de beheerder van dit account. Deze persoon kan bedrijven bewerken,
        toevoegen en verwijderen.
      </p>
      <Field name="firstName" component={TextField} label="Voornaam" fullWidth />
      <Field name="lastName" component={TextField} label="Achternaam" fullWidth />
      <Field name="email" component={TextField} label="Email" fullWidth />
      <Field name="password" component={TextField} label="Wachtwoord" type="password" fullWidth />
      <Field
        name="passwordConfirmation"
        component={TextField}
        label="Herhaal wachtwoord"
        type="password"
        fullWidth
      />
      <h2>Bedrijfsgegevens</h2>
      <p>
        Bedrijfsgegevens voor de facturatie. Op basis van deze gegevens maken wij voor u
        ook alvast een voorbeeld bedrijf aan.
      </p>
      <Field name="companyName" component={TextField} label="Bedrijfsnaam" fullWidth />
      <Field name="phoneNumber" component={TextField} label="Telefoonnummer" fullWidth />
      <Field
        name="agreedToGeneralTerms"
        component={Checkbox}
        label="Ik ga akkoord met de algemene voorwaarden"
      />
      <RaisedButton
        type="submit"
        label="Maak account aan"
        primary
        fullWidth
        disabled={pristine || submitting}
      />
    </form>
  )
}

DumbSignupForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired
}

DumbSignupForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'signup',
  onSubmit: onSubmitActions(
    'CREATE_ACCOUNT',
    'CREATE_ACCOUNT_SUCCESS',
    'CREATE_ACCOUNT_VALIDATION_FAILURE'
  )
})(DumbSignupForm)
