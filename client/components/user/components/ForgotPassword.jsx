import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { Dialog, DialogBody, DialogHeader, DialogButton } from '../../dialog'

function ForgotPassword({ onSubmit, onChange, email, errors }) {
  return (
    <Dialog>
      <DialogHeader
        title="Reset your password"
        titleColor="white"
      />
      <DialogBody>
        {errors && errors.base && <Alert messages={errors.base} />}
        <form action="/" onSubmit={onSubmit}>
          <TextField
            floatingLabelText="Email"
            name="email"
            value={email}
            onChange={onChange}
            fullWidth
            errorText={errors && errors.email && <Alert messages={errors.email} />}
          />
          <DialogButton type="submit" label="Reset password" primary fullWidth />
        </form>
      </DialogBody>
    </Dialog>
  )
}

ForgotPassword.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ForgotPassword
