import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { onSubmitActions } from 'redux-form-submit-saga'
import { Button, TextField } from '../../form'

function LoginForm({ handleSubmit, pristine, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={TextField}
        label="Email"
        fullWidth
      />
      <Field
        name="password"
        component={TextField}
        label="Wachtwoord"
        type="password"
        fullWidth
      />
      <Button
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
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'login',
  onSubmit: onSubmitActions('MY_FORM')
})(LoginForm)
