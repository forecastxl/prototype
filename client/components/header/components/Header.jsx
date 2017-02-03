import React from 'react'
import styled from 'styled-components'
import { Navigation } from '../../navigation'

const StyledHeader = styled.header`
  background: #eaf3ef;
  padding: 0 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

function Header() {
  return (
    <StyledHeader>
      <h1>Forecast XL</h1>
      <Navigation />
    </StyledHeader>
  )
}

export default Header
