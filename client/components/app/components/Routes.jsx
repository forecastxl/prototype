import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import { Home } from '../../home'
import {
  LoginFormContainer,
  ForgotPasswordContainer,
  ForgotPasswordSuccess,
  ResetPasswordContainer,
  SignupFormContainer,
  SignupConfirmContainer,
  SignupSuccess
} from '../../user'

function Routes() {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/login" component={LoginFormContainer} />
      <Match exactly pattern="/login/forgot-password" component={ForgotPasswordContainer} />
      <Match pattern="/login/forgot-password/success" component={ForgotPasswordSuccess} />
      <Match pattern="/login/reset-password" component={ResetPasswordContainer} />
      <Match exactly pattern="/signup" component={SignupFormContainer} />
      <Match pattern="/signup/confirm" component={SignupConfirmContainer} />
      <Match pattern="/signup/success" component={SignupSuccess} />
    </div>
  )
}

export default Routes
