import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'
import { logoutUser } from '../actions'

export function LogoutButtonContainer({ logoutUser }) {
  return (
    <RaisedButton
      type="button"
      label="Log out"
      primary
      onClick={logoutUser}
    />
  )
}

LogoutButtonContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default connect(null, { logoutUser })(LogoutButtonContainer)
