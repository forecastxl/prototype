import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../data/session'
import LogoutButton from './LogoutButton'

export function LogoutButtonContainer({ destroyToken }) {
  return (
    <LogoutButton
      onClick={destroyToken}
    />
  )
}

LogoutButtonContainer.propTypes = {
  destroyToken: PropTypes.func.isRequired
}

const mapActionsToProps = {
  destroyToken: actions.destroyToken
}

export default connect(null, mapActionsToProps)(LogoutButtonContainer)
