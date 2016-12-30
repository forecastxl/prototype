import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import { LoginFormContainer } from '../../login'

function Routes() {
  return (
    <div>
      <Header />
      <Match pattern="/login" component={LoginFormContainer} />
    </div>
  )
}

export default Routes
