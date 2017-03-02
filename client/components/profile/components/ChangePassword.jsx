import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { DialogButton } from '../../dialog'

function ChangePassword({ passwords, onChange, onSubmit, errors }) {
  return (
    <form action="/" onSubmit={onSubmit}>
      <h2>Wachtwoord wijzigen</h2>
      <TextField
        floatingLabelText="Huidig wachtwoord"
        name="currentPassword"
        type="password"
        value={passwords.currentPassword}
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
        name="newPassword"
        type="password"
        value={passwords.newPassword}
        onChange={onChange}
        fullWidth
        errorText={errors && errors.newPassword && <Alert messages={errors.newPassword} />}
      />
      <TextField
        floatingLabelText="Herhaal nieuw wachtwoord"
        name="newPasswordConfirmation"
        type="password"
        value={passwords.newPasswordConfirmation}
        onChange={onChange}
        fullWidth
        errorText={
          errors &&
          errors.newPasswordConfirmation &&
          <Alert messages={errors.newPasswordConfirmation} />
        }
      />
      <DialogButton type="submit" label="Wijzig wachtwoord" primary />
    </form>
  )
}

ChangePassword.propTypes = {
  errors: PropTypes.object.isRequired,
  passwords: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ChangePassword
