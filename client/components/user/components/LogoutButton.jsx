import React, { PropTypes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  padding: 0;
  background: none;
`

function LogoutButton({ onClick }) {
  return (
    <StyledButton type="button" onClick={onClick}>Log out</StyledButton>
  )
}

LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default LogoutButton
