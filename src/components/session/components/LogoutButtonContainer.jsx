import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions'
import LogoutButton from './LogoutButton'

export function LogoutButtonContainer({ logoutUser }) {
  return (
    <LogoutButton
      onClick={logoutUser}
    />
  )
}

LogoutButtonContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default connect(null, { logoutUser })(LogoutButtonContainer)
