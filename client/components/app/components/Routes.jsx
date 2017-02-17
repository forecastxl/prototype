import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import { Home } from '../../home'
import { ProfileContainer } from '../../profile'
import {
  LoginFormContainer,
  ForgotPasswordContainer,
  ForgotPasswordSuccess,
  ResetPasswordContainer,
  SignupFormContainer,
  SignupConfirmContainer,
  SignupSuccess
} from '../../user'
import styled from 'styled-components'

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 40rem;
`

function Routes() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/login" component={LoginFormContainer} />
        <Match exactly pattern="/login/forgot-password" component={ForgotPasswordContainer} />
        <Match pattern="/login/forgot-password/success" component={ForgotPasswordSuccess} />
        <Match pattern="/login/reset-password" component={ResetPasswordContainer} />
        <Match exactly pattern="/signup" component={SignupFormContainer} />
        <Match pattern="/signup/confirm" component={SignupConfirmContainer} />
        <Match pattern="/signup/success" component={SignupSuccess} />
        <Match pattern="/profile" component={ProfileContainer} />
      </AppWrapper>
    </div>
  )
}

export default Routes
