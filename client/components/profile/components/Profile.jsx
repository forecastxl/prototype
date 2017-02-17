import React, { PropTypes } from 'react'

function Profile({ profile }) {
  return (
    <div>
      {profile.firstName} {profile.lastName} {profile.email}
    </div>
  )
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
}

export default Profile
