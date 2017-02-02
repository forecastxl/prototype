import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { ErrorList, TextFieldErrors } from '../../errors'

function ForgotPassword({ onSubmit, onChange, email, errors }) {
  return (
    <div>
      {errors && errors.base && <ErrorList errors={errors.base} />}
      <form action="/" onSubmit={onSubmit}>
        <TextField
          floatingLabelText="Email"
          name="email"
          value={email}
          onChange={onChange}
          errorText={errors && errors.email && <TextFieldErrors errors={errors.email} />}
        />
        <RaisedButton type="submit" label="Reset password" primary />
      </form>
    </div>
  )
}

ForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ForgotPassword
