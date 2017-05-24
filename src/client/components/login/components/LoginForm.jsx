import React from 'react'
import { string, func, bool } from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import RaisedButton from 'material-ui/RaisedButton'
import { Alert } from '../../alert'
import { TextField } from '../../form'

export function LoginForm({ handleSubmit, pristine, submitting, error }) {
  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert message={error} type={'error'} />}
      <Field name="email" component={TextField} label="Email" fullWidth />
      <Field name="password" component={TextField} label="Wachtwoord" type="password" fullWidth />
      <RaisedButton
        type="submit"
        label="Inloggen"
        primary
        fullWidth
        disabled={pristine || submitting}
      />
    </form>
  )
}

LoginForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired
}

LoginForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'login',
  onSubmit: onSubmitActions('LOGIN_SUBMIT', 'LOGIN_SUCCESS', 'LOGIN_VALIDATION_FAILURE')
})(LoginForm)
