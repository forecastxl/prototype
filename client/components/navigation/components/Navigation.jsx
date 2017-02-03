import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

const StyledLink = styled(Link)`
margin-left: 0.5rem;
margin-right: 0.5rem;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

function Navigation() {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/signup">Signup</StyledLink>
    </nav>
  )
}

export default Navigation
