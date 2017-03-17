import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { Dialog, DialogBody, DialogHeader, DialogFooter, DialogButton } from '../../dialog'

function LoginForm({ onSubmit, onChange, user, errors }) {
  return (
    <Dialog>
      <DialogHeader
        title="Inloggen op ForecastXL"
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
          /><br />
          <TextField
            floatingLabelText="Wachtwoord"
            name="password"
            type="password"
            value={user.password}
            onChange={onChange}
            fullWidth
          /><br />
          <DialogButton type="submit" label="Inloggen" primary fullWidth />
        </form>
        <DialogFooter>
          <Link to="/signup">Nog geen account?</Link>
          <span> - </span>
          <Link to="/login/forgot-password">Wachtwoord vergeten?</Link>
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
