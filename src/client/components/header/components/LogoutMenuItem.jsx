import React from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import { actions } from '../../../data/session'

export function DumbLogoutMenuItem({ destroySession, ...rest }) {
  return <MenuItem onClick={destroySession} {...rest} />
}

DumbLogoutMenuItem.propTypes = {
  destroySession: func.isRequired
}

export default connect(null, { destroySession: actions.destroySession })(DumbLogoutMenuItem)
