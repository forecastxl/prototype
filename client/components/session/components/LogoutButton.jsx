import React, { PropTypes } from 'react'
import { RaisedButton } from 'material-ui'

function LogoutButton({ onClick }) {
  return (
    <RaisedButton
      type="button"
      label="Log out"
      primary
      onClick={onClick}
    />
  )
}

LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default LogoutButton
