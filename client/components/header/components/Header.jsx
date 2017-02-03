import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

const StyledHeader = styled.header`
  background: #eaf3ef;
  padding: 0 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

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

function Header() {
  return (
    <StyledHeader>
      <h1>Forecast XL</h1>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Signup</StyledLink>
      </nav>
    </StyledHeader>
  )
}

export default Header
