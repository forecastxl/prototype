import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions'
import LogoutButton from './LogoutButton'

export function LogoutButtonContainer({ logout }) {
  return (
    <LogoutButton
      onClick={logout}
    />
  )
}

LogoutButtonContainer.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(null, { logout })(LogoutButtonContainer)
