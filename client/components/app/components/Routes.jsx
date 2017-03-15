import React from 'react'
import { Route, Switch } from 'react-router-dom'

// always rendered
import { Header } from '../../header'
import { NotificationContainer } from '../../notifications'

// scenes
import Home from '../../../scenes/Home'
import ForgotPassword from '../../../scenes/ForgotPassword'
import Login from '../../../scenes/Login'
import Profile from '../../../scenes/Profile'
import Signup from '../../../scenes/Signup'
import SignupSuccess from '../../../scenes/SignupSuccess'
import SignupConfirmContainer from '../../../scenes/SignupConfirm'
import ResetPassword from '../../../scenes/ResetPassword'

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
        <Route path="/login/reset-password" component={ResetPassword} />

        {/* Signup */}
        <Route exact path="/signup" component={Signup} />
        <Route path="/signup/success" component={SignupSuccess} />
        <Route path="/signup/confirm" component={SignupConfirmContainer} />

        {/* Profile */}
        <Route path="/profile" component={Profile} />

      </Switch>
      <NotificationContainer />
    </div>
  )
}

export default Routes
