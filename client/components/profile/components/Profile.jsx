import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { Spacer } from '../../spacer'
import { DialogButton } from '../../dialog'
import { Container } from '../../container'

function Profile({ profile, onChange, onSubmit, errors }) {
  return (
    <Container>
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
          <DialogButton type="submit" label="Wijzig profiel" primary />
        </Spacer>
      </form>
      <form action="/" onSubmit={onSubmit}>
        <h2>Wachtwoord wijzigen</h2>
        <TextField
          floatingLabelText="Huidig wachtwoord"
          name="currentPassword"
          type="password"
          value={profile.currentPassword}
          onChange={onChange}
          fullWidth
          errorText={
            errors && errors.currentPassword && <Alert messages={errors.currentPassword} />
          }
        />
        <TextField
          floatingLabelText="Nieuw wachtwoord"
          name="newPassword"
          type="password"
          value={profile.newPassword}
          onChange={onChange}
          fullWidth
          errorText={errors && errors.newPassword && <Alert messages={errors.newPassword} />}
        />
        <TextField
          floatingLabelText="Herhaal nieuw wachtwoord"
          name="newPasswordConfirmation"
          type="password"
          value={profile.newPasswordConfirmation}
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
    </Container>
  )
}

Profile.propTypes = {
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Profile
