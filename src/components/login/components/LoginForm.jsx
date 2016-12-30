import React, { PropTypes } from 'react'
import { TextField, RaisedButton } from 'material-ui'

function LoginForm({ onSubmit, onChange, user }) {
  return (
    <form action="/" onSubmit={onSubmit}>
      <TextField
        floatingLabelText="Email"
        name="email"
        value={user.email}
        onChange={onChange}
      /><br />
      <TextField
        floatingLabelText="Password"
        name="password"
        type="password"
        value={user.password}
        onChange={onChange}
      /><br />
      <RaisedButton type="submit" label="Log in" primary />
    </form>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  })
}

export default LoginForm
