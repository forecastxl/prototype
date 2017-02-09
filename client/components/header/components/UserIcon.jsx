import React, { PropTypes } from 'react'
import SocialPerson from 'material-ui/svg-icons/social/person'
import muiThemeable from 'material-ui/styles/muiThemeable'

export function UserIcon({ muiTheme }) {
  return (
    <SocialPerson style={{ color: muiTheme.palette.alternateTextColor }} />
  )
}

UserIcon.propTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default muiThemeable()(UserIcon)
