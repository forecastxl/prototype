import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { Alert } from '../../alert'
import { TextField } from '../../form'
import getUrlParameter from '../../../services/getUrlParameter'

function DumbResetPasswordForm({ handleSubmit, pristine, submitting, error }) {
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
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

DumbResetPasswordForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'reset-password',
  onSubmit: onSubmitActions(
    'RESET_PASSWORD',
    'RESET_PASSWORD_SUCCESS',
    'RESET_PASSWORD_VALIDATION_FAILURE'
  )
})(DumbResetPasswordForm)
