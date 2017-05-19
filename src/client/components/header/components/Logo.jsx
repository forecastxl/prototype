import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: uppercase;
`

const Blue = styled.span`
  color: blue;
`

const White = styled.span`
  color: white;
`

function Logo() {
  return (
    <Heading>
      <White>Forecast</White><Blue>XL</Blue>
    </Heading>
  )
}

export default Logo
