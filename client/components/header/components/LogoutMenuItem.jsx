import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import { actions } from '../../user'

export function LogoutMenuItem({ logout, ...rest }) {
  return (
    <MenuItem onClick={logout} {...rest} />
  )
}

LogoutMenuItem.propTypes = {
  logout: PropTypes.func.isRequired
}

export default connect(null, { logout: actions.logout })(LogoutMenuItem)
