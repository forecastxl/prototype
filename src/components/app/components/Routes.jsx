import React from 'react'
import Match from 'react-router/Match'
import { Header } from '../../header'
import { Login } from '../../login'

function Routes() {
  return (
    <div>
      <Header />
      <Match pattern="/login" component={Login} />
    </div>
  )
}

export default Routes
