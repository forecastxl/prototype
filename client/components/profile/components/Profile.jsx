import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import { Alert } from '../../alert'

const onChange = () => {}
const errors = {}

function Profile({ profile }) {
  return (
    <div>
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
    </div>
  )
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
}

export default Profile
