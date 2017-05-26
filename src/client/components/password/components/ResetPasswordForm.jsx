import React from 'react'
import { string, func, bool } from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { Alert } from '../../alert'
import { TextField } from '../../form'
import getUrlParameter from '../../../services/getUrlParameter'

export function DumbResetPasswordForm({ handleSubmit, pristine, submitting, error }) {
  const token = getUrlParameter('token')

  if (!token) {
    return <div>Could not find a token. Did you use the correct link?</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert message={error} type={'error'} />}
      <Field name="password" component={TextField} label="Password" type="password" fullWidth />
      <Field
        name="passwordConfirmation"
        component={TextField}
        label="Repeat password"
        type="password"
        fullWidth
      />
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

DumbResetPasswordForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired
}

DumbResetPasswordForm.defaultProps = {
  error: ''
}

/* istanbul ignore next: decorator isn't tested */
export default reduxForm({
  form: 'reset-password',
  onSubmit: onSubmitActions(
    'RESET_PASSWORD',
    'RESET_PASSWORD_SUCCESS',
    'RESET_PASSWORD_VALIDATION_FAILURE'
  )
})(DumbResetPasswordForm)
