import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../../header'
import { NotificationsContainer } from '../../notifications'
import Home from '../../../scenes/Home'
import ForgotPassword from '../../../scenes/ForgotPassword'
import Login from '../../../scenes/Login'
import Profile from '../../../scenes/Profile'
import Signup from '../../../scenes/Signup'
import SignupConfirmContainer from '../../../scenes/SignupConfirm'
import ResetPassword from '../../../scenes/ResetPassword'

function Routes() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />

        {/* Login */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/forgot-password" component={ForgotPassword} />
        <Route path="/login/reset-password" component={ResetPassword} />

        {/* Signup */}
        <Route exact path="/signup" component={Signup} />
        <Route path="/signup/confirm" component={SignupConfirmContainer} />

        {/* Profile */}
        <Route path="/profile" component={Profile} />

      </Switch>
      <NotificationsContainer />
    </div>
  )
}

export default Routes
