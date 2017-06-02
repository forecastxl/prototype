import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { IconMenu, MenuItem, Avatar } from 'material-ui'
import { HardwareKeyboardArrowDown, ActionSettings, ActionExitToApp } from 'material-ui/svg-icons'
import styled from 'styled-components'
import { colors } from '../../../styles'
import { fetchProfile } from '../actions'
import { logout } from '../../../data/session/actions'
import { getProfile } from '../selectors'

const mapStateToProps = state => ({ profile: getProfile(state) })
const mapStateToDispatch = dispatch => ({
  fetchProfile: () => dispatch(fetchProfile()),
  logout: () => dispatch(logout())
})

const ProfileName = styled.span`
  color: ${colors.white};
  font-size: 0.8rem;
  font-weight: 200;
  margin-left: 15px;
`

const ProfileWidgetContent = styled.div`
  & * {
    vertical-align: middle;
  }
  &:hover {
    cursor: pointer;
  }
`

class ProfileWidget extends React.Component {
  componentWillMount() {
    this.props.fetchProfile()
  }

  render() {
    const { profile } = this.props
    return (
      <IconMenu
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        iconButtonElement={
          <div>
            {/* Note: must be wrapped in a div, otherwise click events are not properly attached */}
            <ProfileWidgetContent>
              <Avatar size={35} src="http://i.pravatar.cc/150?u=a042581f4e290267014f" />
              <ProfileName>{profile.name}</ProfileName>
              <HardwareKeyboardArrowDown
                color={colors.white}
                style={{ marginLeft: '2px', marginTop: '2px' }}
              />
            </ProfileWidgetContent>
          </div>
        }
      >
        <MenuItem
          leftIcon={<ActionSettings />}
          primaryText="Instellingen"
          onTouchTap={() => {
            this.props.history.push('/settings')
          }}
        />
        <MenuItem
          leftIcon={<ActionExitToApp />}
          primaryText="Uitloggen"
          onTouchTap={() => {
            this.props.logout()
            this.props.history.push('/login')
          }}
        />
      </IconMenu>
    )
  }
}

ProfileWidget.propTypes = {
  history: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapStateToDispatch)(withRouter(ProfileWidget))
