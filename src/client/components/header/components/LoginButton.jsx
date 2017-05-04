import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import muiThemeable from 'material-ui/styles/muiThemeable'
import FlatButton from 'material-ui/FlatButton'

export function DumbLoginButton({ muiTheme }) {
  return (
    <Link to="/login">
      <FlatButton style={{ color: muiTheme.palette.alternateTextColor }} label="Login" />
    </Link>
  )
}

DumbLoginButton.propTypes = {
  muiTheme: PropTypes.object.isRequired
}

export default muiThemeable()(DumbLoginButton)
