import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

function LoginForm({ onSubmit, onChange, user, errors }) {
  return (
    <form action="/" onSubmit={onSubmit}>
      <TextField
        floatingLabelText="Email"
        name="email"
        value={user.email}
        onChange={onChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <TextField
        floatingLabelText="Password"
        name="password"
        type="password"
        value={user.password}
        onChange={onChange}
        errorText={errors.base && errors.base.join(', ')}
      /><br />
      <RaisedButton type="submit" label="Log in" primary />
    </form>
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
