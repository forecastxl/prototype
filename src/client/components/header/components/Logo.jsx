import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles'

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: uppercase;
`

const Blue = styled.span`
  color: ${colors.blue};
`

const White = styled.span`
  color: ${colors.white};
`

function Logo() {
  return (
    <Heading>
      <White>Forecast</White><Blue>XL</Blue>
    </Heading>
  )
}

export default Logo
