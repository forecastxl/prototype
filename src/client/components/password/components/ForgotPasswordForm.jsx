import React from 'react'
import { string, func, bool } from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { Alert } from '../../alert'
import { TextField } from '../../form'

export function DumbForgotPasswordForm({ handleSubmit, pristine, submitting, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert message={error} type={'error'} />}
      <Field name="email" component={TextField} label="Email" fullWidth />
      <RaisedButton
        type="submit"
        label="Reset password"
        primary
        fullWidth
        disabled={pristine || submitting}
      />
    </form>
  )
}

DumbForgotPasswordForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired
}

DumbForgotPasswordForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'forgot-password',
  onSubmit: onSubmitActions(
    'REQUEST_RESET_PASSWORD',
    'REQUEST_RESET_PASSWORD_SUCCESS',
    'REQUEST_RESET_PASSWORD_VALIDATION_FAILURE'
  )
})(DumbForgotPasswordForm)
