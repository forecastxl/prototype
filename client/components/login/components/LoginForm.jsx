import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import { Alert } from '../../alert'
import { Button, TextField } from '../../form'

export function LoginForm({ handleSubmit, pristine, submitting, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert message={error} type={'error'} />}
      <Field name="email" component={TextField} label="Email" fullWidth />
      <Field name="password" component={TextField} label="Wachtwoord" type="password" fullWidth />
      <Button type="submit" label="Inloggen" primary fullWidth disabled={pristine || submitting} />
    </form>
  )
}

LoginForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

LoginForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'login',
  onSubmit: onSubmitActions('LOGIN_SUBMIT', 'LOGIN_SUCCESS', 'LOGIN_VALIDATION_FAILURE')
})(LoginForm)
