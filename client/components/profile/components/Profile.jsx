import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'
import { Spacer } from '../../spacer'
import { DialogButton } from '../../dialog'
import { Container } from '../../container'
import ChangePasswordContainer from './ChangePasswordContainer'

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
      <ChangePasswordContainer />
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
