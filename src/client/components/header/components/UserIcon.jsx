import React, { PropTypes } from 'react'
import SocialPerson from 'material-ui/svg-icons/social/person'
import muiThemeable from 'material-ui/styles/muiThemeable'

export function DumbUserIcon({ muiTheme }) {
  return <SocialPerson style={{ color: muiTheme.palette.alternateTextColor }} />
}

DumbUserIcon.propTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default muiThemeable()(DumbUserIcon)
