import React, { PropTypes } from 'react'
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
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

DumbPasswordForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'profile',
  onSubmit: onSubmitActions(
    'REQUEST_RESET_PASSWORD',
    'REQUEST_RESET_PASSWORD_SUCCESS',
    'REQUEST_RESET_PASSWORD_VALIDATION_FAILURE'
  )
})(DumbPasswordForm)
