import React from 'react'
import styled from 'styled-components'
import { TextField, RaisedButton } from 'material-ui'

const Center = styled.div`
  margin: 0 auto;
  width: 300px;
`

const Buttons = styled.div`
  margin-top: 20px;
`

const SpacedButton = styled(RaisedButton)`
  margin-right: 10px;
`

function Login() {
  return (
    <Center>
      <TextField
        floatingLabelText="Name"
      /><br />
      <TextField
        floatingLabelText="Password"
        type="password"
      /><br />
      <Buttons>
        <SpacedButton
          label="Login"
          primary
        />
        <RaisedButton
          label="Clear"
          secondary
        />
      </Buttons>
    </Center>
  )
}

export default Login
