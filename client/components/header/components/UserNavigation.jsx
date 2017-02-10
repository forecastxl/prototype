import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import UserIcon from './UserIcon'
import LogoutMenuItem from './LogoutMenuItem'

function UserNavigation() {
  return (
    <IconMenu
      iconButtonElement={<IconButton><UserIcon /></IconButton>}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <LogoutMenuItem primaryText="Logout" />
    </IconMenu>
  )
}

export default UserNavigation
