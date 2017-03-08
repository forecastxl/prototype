import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../../header'
import { Notification } from '../../notification'
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
      <Switch>
        <Route exact path="/" component={Home} />

        {/* Login */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/forgot-password" component={ForgotPassword} />
        <Route path="/login/forgot-password/success" component={ForgotPasswordSuccess} />
        <Route path="/login/reset-password" component={ResetPassword} />

        {/* Signup */}
        <Route exact path="/signup" component={Signup} />
        <Route path="/signup/success" component={SignupSuccess} />
        <Route path="/signup/confirm" component={SignupConfirmContainer} />

        {/* Profile */}
        <Route path="/profile" component={Profile} />

      </Switch>
      <Notification />
    </div>
  )
}

export default Routes
