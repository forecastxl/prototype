import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { RaisedButton, TextField } from 'material-ui'

const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function LoginForm({ onSubmit, onChange, user }) {
  return (
    <Aligner>
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
    </Aligner>
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
