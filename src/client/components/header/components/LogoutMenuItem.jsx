import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import { actions } from '../../../data/session'

export function DumbLogoutMenuItem({ destroySession, ...rest }) {
  return <MenuItem onClick={destroySession} {...rest} />
}

DumbLogoutMenuItem.propTypes = {
  destroySession: PropTypes.func.isRequired
}

export default connect(null, { destroySession: actions.destroySession })(DumbLogoutMenuItem)
