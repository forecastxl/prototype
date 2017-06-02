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
import Missing from '../../../scenes/Missing'
import ProtectedRoute from './ProtectedRoute'

const Routes = () => (
  <div>
    <Header />
    <Switch>
      {/* Login */}
      <Route exact path="/login" component={Login} />
      <Route path="/login/forgot-password" component={ForgotPassword} />
      <Route path="/login/reset-password" component={ResetPassword} />

      {/* Signup */}
      <Route exact path="/signup" component={Signup} />
      <Route path="/signup/confirm" component={SignupConfirmContainer} />

      {/* Home */}
      <ProtectedRoute exact path="/" component={Home} />

      {/* Profile */}
      <ProtectedRoute path="/profile" component={Profile} />

      {/* 404 */}
      <Route component={Missing} />
    </Switch>
    <NotificationsContainer />
  </div>
)

export default Routes
