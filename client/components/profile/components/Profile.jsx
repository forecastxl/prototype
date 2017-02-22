import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { Spacer } from '../../spacer'
import { DialogButton } from '../../dialog'

// TODO: link to real errors
const errors = {}

function Profile({ profile, onChange, onSubmit }) {
  return (
    <div>
      <form action="/" onSubmit={onSubmit}>
        <Spacer size={'2rem'} bottom>
          <h2>Mijn profiel</h2>
          <TextField
            floatingLabelText="Voornaam"
            name="firstName"
            value={profile.firstName}
            onChange={onChange}
            fullWidth
            errorText={errors && errors.firstName && <Alert messages={errors.firstName} />}
          />
          <TextField
            floatingLabelText="Achternaam"
            name="lastName"
            value={profile.lastName}
            onChange={onChange}
            fullWidth
            errorText={errors && errors.lastName && <Alert messages={errors.lastName} />}
          />
          <TextField
            floatingLabelText="Email"
            name="email"
            value={profile.email}
            onChange={onChange}
            fullWidth
            errorText={errors && errors.email && <Alert messages={errors.email} />}
          />
        </Spacer>
        <h2>Wachtwoord wijzigen</h2>
        <TextField
          floatingLabelText="Huidig wachtwoord"
          name="currentPassword"
          value={profile.currentPassword}
          onChange={onChange}
          fullWidth
          errorText={errors && errors.currentPassword && <Alert messages={errors.currentPassword} />}
        />
        <TextField
          floatingLabelText="Nieuw wachtwoord"
          name="newPassword"
          value={profile.newPassword}
          onChange={onChange}
          fullWidth
          errorText={errors && errors.newPassword && <Alert messages={errors.newPassword} />}
        />
        <TextField
          floatingLabelText="Herhaal nieuw wachtwoord"
          name="newPasswordConfirmation"
          value={profile.newPasswordConfirmation}
          onChange={onChange}
          fullWidth
          errorText={errors && errors.newPasswordConfirmation && <Alert messages={errors.newPasswordConfirmation} />}
        />
        <DialogButton type="submit" label="Wijzig profiel" primary />
      </form>
    </div>
  )
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Profile
