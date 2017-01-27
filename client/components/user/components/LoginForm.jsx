import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { ErrorList, TextFieldErrors } from '../../errors'

function LoginForm({ onSubmit, onChange, user, errors }) {
  return (
    <div>
      {errors && errors.base && <ErrorList errors={errors.base} />}
      <form action="/" onSubmit={onSubmit}>
        <TextField
          floatingLabelText="Email"
          name="email"
          value={user.email}
          onChange={onChange}
          errorText={errors && errors.email && <TextFieldErrors errors={errors.email} />}
        /><br />
        <TextField
          floatingLabelText="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={onChange}
          errorText={errors && errors.password && <TextFieldErrors errors={errors.password} />}
        /><br />
        <RaisedButton type="submit" label="Log in" primary />
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  })
}

export default LoginForm
