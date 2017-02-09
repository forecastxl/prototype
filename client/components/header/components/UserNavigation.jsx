import React from 'react'
import SocialPerson from 'material-ui/svg-icons/social/person'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { LogoutButtonContainer } from '../../user'
import { GetThemeProp } from '../../theme'

function UserIcon() {
  return (
    <GetThemeProp prop="alternateTextColor">
      {color => <SocialPerson style={{ color }} />}
    </GetThemeProp>
  )
}

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
