import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { TextFieldErrors } from '../../errors'
import { Dialog, DialogBody, DialogHeader, DialogFooter, DialogButton } from '../../dialog'

function LoginForm({ onSubmit, onChange, user, errors }) {
  return (
    <Dialog>
      <DialogHeader
        title="Log in to ForecastXL"
        titleColor="white"
      />
      <DialogBody>
        {errors && errors.base && <Alert messages={errors.base} />}
        <form action="/" onSubmit={onSubmit}>
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
          <DialogButton type="submit" label="Log in" primary fullWidth />
        </form>
        <DialogFooter>
          <Link to="/signup">Don&apos;t have an account?</Link>
          <span> - </span>
          <Link to="/login/forgot-password">Forgot your password?</Link>
        </DialogFooter>
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
