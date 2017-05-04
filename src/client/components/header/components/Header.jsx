import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectors } from '../../../data/session'
import Wrapper from './Wrapper'
import Title from './Title'
import UserNavigation from './UserNavigation'
import LoginButton from './LoginButton'

export function Header({ hasToken }) {
  return (
    <Wrapper>
      <Title>ForecastXL</Title>
      {hasToken ? <UserNavigation /> : <LoginButton />}
    </Wrapper>
  )
}

Header.propTypes = {
  hasToken: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  hasToken: selectors.hasToken(state)
})

export default connect(mapStateToProps, {})(Header)
