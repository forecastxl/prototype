/* eslint-disable react/jsx-indent-props, react/jsx-closing-bracket-location */

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import React from 'react'
import { RaisedButton } from 'material-ui'
import { colors } from '../../../styles'
import { selectors } from '../../../data/session'
import { ProfileWidget } from '../../profile'
import Wrapper from './Wrapper'
import Logo from './Logo'

const mapStateToProps = state => ({
  hasAuth: selectors.hasToken(state)
})

export const DumbHeader = ({ hasAuth, history }) => (
  <Wrapper>
    <Logo />
    {hasAuth
      ? <ProfileWidget />
      : <RaisedButton
          label="Inloggen"
          labelColor={colors.white}
          backgroundColor={colors.green}
          style={{ backgroundColor: 'none' }}
          onTouchTap={() => {
            history.push('/login')
          }}
        />}
  </Wrapper>
)

DumbHeader.propTypes = {
  hasAuth: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withRouter(DumbHeader))
