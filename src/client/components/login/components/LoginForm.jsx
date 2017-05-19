import React from 'react'
import { string, func, bool } from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import { RaisedButton } from 'material-ui'
import { Card } from '../../card'
import { Alert } from '../../alert'
import { TextField } from '../../form'
import { required } from '../../form/validators'

export function LoginForm({ handleSubmit, submitting, valid, error }) {
  return (
    <Card padding="2em" size={Card.SIZE.small} title="Login">
      <form onSubmit={handleSubmit}>
        {error && <Alert message={error} type="error" />}
        <Field name="email" component={TextField} label="Email" fullWidth validate={required} />
        <Field
          name="password"
          component={TextField}
          label="Wachtwoord"
          type="password"
          fullWidth
          validate={required}
        />
        <RaisedButton
          type="submit"
          label="Inloggen"
          primary
          fullWidth
          disabled={!valid || submitting}
        />
      </form>
    </Card>
  )
}

LoginForm.propTypes = {
  error: string,
  handleSubmit: func.isRequired,
  valid: bool.isRequired,
  submitting: bool.isRequired
}

LoginForm.defaultProps = {
  error: ''
}

export default reduxForm({
  form: 'login',
  onSubmit: onSubmitActions('LOGIN_SUBMIT', 'LOGIN_SUCCESS', 'LOGIN_VALIDATION_FAILURE')
})(LoginForm)
