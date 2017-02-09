import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { LogoutButtonContainer } from '../../user'
import UserIcon from './UserIcon'

function UserNavigation() {
  return (
    <IconMenu
      iconButtonElement={<IconButton><UserIcon /></IconButton>}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <LogoutButtonContainer />
      </MenuItem>
    </IconMenu>
  )
}

export default UserNavigation
