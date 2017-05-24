import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Wrapper from './Wrapper'
import Logo from './Logo'

function Header() {
  return (
    <Wrapper>
      <Logo />
      <RaisedButton type="submit" label="Inloggen" primary />
    </Wrapper>
  )
}

export default Header
