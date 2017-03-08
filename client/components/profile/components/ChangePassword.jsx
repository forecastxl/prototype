import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { DialogButton } from '../../dialog'

function ChangePassword({ user, onChange, onSubmit, errors }) {
  return (
    <form action="/" onSubmit={onSubmit}>
      <h2>Wachtwoord wijzigen</h2>
      <TextField
        floatingLabelText="Huidig wachtwoord"
        name="currentPassword"
        type="password"
        value={user.currentPassword}
        onChange={onChange}
        fullWidth
        errorText={
          errors &&
          errors.currentPassword &&
          <Alert messages={errors.currentPassword} />
        }
      />
      <TextField
        floatingLabelText="Nieuw wachtwoord"
        name="password"
        type="password"
        value={user.password}
        onChange={onChange}
        fullWidth
        errorText={errors && errors.password && <Alert messages={errors.password} />}
      />
      <TextField
        floatingLabelText="Herhaal nieuw wachtwoord"
        name="passwordConfirmation"
        type="password"
        value={user.passwordConfirmation}
        onChange={onChange}
        fullWidth
        errorText={
          errors &&
          errors.passwordConfirmation &&
          <Alert messages={errors.passwordConfirmation} />
        }
      />
      <DialogButton type="submit" label="Wijzig wachtwoord" primary />
    </form>
  )
}

ChangePassword.propTypes = {
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ChangePassword
