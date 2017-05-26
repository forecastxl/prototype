import React from 'react'
import { string, func, bool } from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import { RaisedButton } from 'material-ui'
import { Card } from '../../card'
import { Alert } from '../../alert'
import { TextField } from '../../form'
import { required } from '../../form/validators'
import { colors } from '../../../styles'

export function LoginForm({ handleSubmit, submitting, valid, error }) {
  return (
    <Card padding="2rem" size="small" title="Login">
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
          backgroundColor={colors.green}
          labelColor={colors.white}
          type="submit"
          label="Inloggen"
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
