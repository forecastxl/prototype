import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../data/session'
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

const mapActionsToProps = {
  destroyToken: actions.destroyToken
}

export default connect(null, mapActionsToProps)(LogoutButtonContainer)
