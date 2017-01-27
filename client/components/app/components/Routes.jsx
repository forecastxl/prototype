import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import { Home } from '../../home'
import {
  ForgotPasswordContainer, ForgotPasswordSuccess, LoginFormContainer, ResetPasswordContainer
} from '../../login'
import { SignupFormContainer, SignupConfirm, SignupSuccess } from '../../signup'

function Routes() {
  return (
    <div>
      <Header />
      <Match exactly pattern="/home" component={Home} />
      <Match exactly pattern="/login" component={LoginFormContainer} />
      <Match exactly pattern="/login/forgot-password" component={ForgotPasswordContainer} />
      <Match exactly pattern="/login/forgot-password/success" component={ForgotPasswordSuccess} />
      <Match exactly pattern="/login/reset-password" component={ResetPasswordContainer} />
      <Match exactly pattern="/signup" component={SignupFormContainer} />
      <Match pattern="/signup/confirm" component={SignupConfirm} />
      <Match exactly pattern="/signup/success" component={SignupSuccess} />
    </div>
  )
}

export default Routes
