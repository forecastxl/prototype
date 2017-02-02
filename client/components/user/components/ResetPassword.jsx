import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { ErrorList, TextFieldErrors } from '../../errors'

function ResetPassword({
  hasToken,
  errors,
  onSubmit,
  onChange,
  password,
  passwordConfirmation
}) {
  if (!hasToken) {
    return <div>Could not find a token. Did you use the correct link?</div>
  }

  return (
    <div>
      {errors && errors.base && <ErrorList errors={errors.base} />}
      <form action="/" onSubmit={onSubmit}>
        <TextField
          floatingLabelText="Password"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          errorText={errors && errors.password && <TextFieldErrors errors={errors.password} />}
        /><br />
        <TextField
          floatingLabelText="Repeat password"
          name="passwordConfirmation"
          type="password"
          value={passwordConfirmation}
          onChange={onChange}
          errorText={
            errors &&
            errors.passwordConfirmation &&
            <TextFieldErrors errors={errors.passwordConfirmation} />
          }
        /><br />
        <RaisedButton type="submit" label="Reset password" primary />
      </form>
    </div>
  )
}

ResetPassword.propTypes = {
  hasToken: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired
}

export default ResetPassword
