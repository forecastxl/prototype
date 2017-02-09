import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { ErrorList, TextFieldErrors } from '../../errors'
import { Dialog, DialogBody, DialogHeader } from '../../dialog'

const StyledButton = styled(RaisedButton)`
  margin-top: 1.5rem;
`

const StyledForm = styled.form`
  margin: 0 0 1.5rem;
`

function LoginForm({ onSubmit, onChange, user, errors }) {
  return (
    <Dialog>
      <DialogHeader
        title="Log in to ForecastXL"
        titleColor="white"
      />
      <DialogBody>
        {errors && errors.base && <ErrorList errors={errors.base} />}
        <StyledForm action="/" onSubmit={onSubmit}>
          <TextField
            floatingLabelText="Email"
            name="email"
            value={user.email}
            onChange={onChange}
            fullWidth
            errorText={errors && errors.email && <TextFieldErrors errors={errors.email} />}
          /><br />
          <TextField
            floatingLabelText="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={onChange}
            fullWidth
            errorText={errors && errors.password && <TextFieldErrors errors={errors.password} />}
          /><br />
          <StyledButton type="submit" label="Log in" primary fullWidth />
        </StyledForm>
        <Link to="/signup">Don&apos;t have an account?</Link>
        <span> - </span>
        <Link to="/login/forgot-password">Forgot your password?</Link>
      </DialogBody>
    </Dialog>
  )
}

LoginForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired
}

export default LoginForm
