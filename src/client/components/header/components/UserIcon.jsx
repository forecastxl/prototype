import React from 'react'
import { object } from 'prop-types'
import SocialPerson from 'material-ui/svg-icons/social/person'
import muiThemeable from 'material-ui/styles/muiThemeable'

export function DumbUserIcon({ muiTheme }) {
  return <SocialPerson style={{ color: muiTheme.palette.alternateTextColor }} />
}

DumbUserIcon.propTypes = {
  muiTheme: object.isRequired
}

export default muiThemeable()(DumbUserIcon)
