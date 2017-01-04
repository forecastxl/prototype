import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'
import { logoutUser } from '../actions'

function LogoutButton({ logoutUser }) {
  return (
    <RaisedButton
      type="button"
      label="Log out"
      primary
      onClick={logoutUser}
    />
  )
}

LogoutButton.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default connect(null, { logoutUser })(LogoutButton)
