import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import { Home } from '../../home'
import { LoginFormContainer } from '../../login'
import { SignupFormContainer, SignupSuccess } from '../../signup'

function Routes() {
  return (
    <div>
      <Header />
      <Match pattern="/home" component={Home} />
      <Match pattern="/login" component={LoginFormContainer} />
      <Match exactly pattern="/signup" component={SignupFormContainer} />
      <Match pattern="/signup/success" component={SignupSuccess} />
    </div>
  )
}

export default Routes
