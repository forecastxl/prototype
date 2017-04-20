import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserIcon from './UserIcon'
import LogoutMenuItem from './LogoutMenuItem'
import styles from '../../../styles'

const StyledLink = styled(Link)`
  color: ${styles.colors.black};
  display: block;
  text-decoration: none;
`

function UserNavigation() {
  return (
    <IconMenu
      iconButtonElement={<IconButton><UserIcon /></IconButton>}
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <StyledLink to="/profile">Profiel</StyledLink>
      </MenuItem>
      <Divider />
      <LogoutMenuItem primaryText="Uitloggen" />
    </IconMenu>
  )
}

export default UserNavigation
