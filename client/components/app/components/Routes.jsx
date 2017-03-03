import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import Home from '../../../scenes/home'
import ForgotPassword from '../../../scenes/forgot-password'
import ForgotPasswordSuccess from '../../../scenes/forgot-password-success'
import Login from '../../../scenes/login'
import Profile from '../../../scenes/profile'
import Signup from '../../../scenes/signup'
import SignupSuccess from '../../../scenes/signup-success'
import SignupConfirmContainer from '../../../scenes/signup-confirm'
import ResetPassword from '../../../scenes/reset-password'

function Routes() {
  return (
    <div>
      <Header />
      {/* Root */}
      <Match exactly pattern="/" component={Home} />

      {/* Login */}
      <Match exactly pattern="/login" component={Login} />
      <Match exactly pattern="/login/forgot-password" component={ForgotPassword} />
      <Match pattern="/login/forgot-password/success" component={ForgotPasswordSuccess} />
      <Match pattern="/login/reset-password" component={ResetPassword} />

      {/* Signup */}
      <Match exactly pattern="/signup" component={Signup} />
      <Match pattern="/signup/success" component={SignupSuccess} />
      <Match pattern="/signup/confirm" component={SignupConfirmContainer} />

      {/* Profile */}
      <Match pattern="/profile" component={Profile} />

    </div>
  )
}

export default Routes
