import React from 'react'
import { string, func, bool } from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from '../../form'
import { Alert } from '../../alert'

export function DumbPasswordForm({ handleSubmit, pristine, submitting, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert message={error} type={'error'} />}
      <Field
        name="currentPassword"
        component={TextField}
        label="Huidig wachtwoord"
        type="password"
        fullWidth
      />
      <Field
        name="newPassword"
        component={TextField}
        label="Nieuw wachtwoord"
        type="password"
        fullWidth
      />
      <Field
        name="newPasswordConfirmation"
        component={TextField}
        label="Herhaal nieuw wachtwoord"
        type="password"
        fullWidth
      />
      <RaisedButton
        type="submit"
        label="Wijzig wachtwoord"
        primary
        fullWidth
        disabled={pristine || submitting}
      />
    </form>
  )
}

DumbPasswordForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired
}

DumbPasswordForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'password',
  onSubmit: onSubmitActions(
    'UPDATE_PASSWORD',
    'UPDATE_PASSWORD_SUCCESS',
    'UPDATE_PASSWORD_VALIDATION_FAILURE'
  )
})(DumbPasswordForm)
