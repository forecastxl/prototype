import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import { Home } from '../../home'
import { LoginFormContainer, SignupFormContainer, SignupConfirm, SignupSuccess } from '../../user'

function Routes() {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/login" component={LoginFormContainer} />
      <Match exactly pattern="/signup" component={SignupFormContainer} />
      <Match pattern="/signup/confirm" component={SignupConfirm} />
      <Match pattern="/signup/success" component={SignupSuccess} />
    </div>
  )
}

export default Routes
