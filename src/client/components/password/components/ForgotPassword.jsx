import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { Alert } from '../../alert'
import { TextField } from '../../form'

function ForgotPasswordForm({ handleSubmit, pristine, submitting, error }) {
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

ForgotPasswordForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

ForgotPasswordForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'forgot-password',
  onSubmit: onSubmitActions('LOGIN_SUBMIT', 'LOGIN_SUCCESS', 'LOGIN_VALIDATION_FAILURE')
})(ForgotPasswordForm)
