import React from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import { selectors } from '../../data/session'
import { Card } from '../../components/card'
import { LoginForm } from '../../components/login'

export function DumbLogin({ session }) {
  return (
    <Card padding="2rem" size="small" title="Login">
      <LoginForm />
    </Card>
  )
}

DumbLogin.propTypes = {
  session: object.isRequired
}

const mapStateToProps = state => ({
  session: selectors.getSessionState(state)
})

export default connect(mapStateToProps)(DumbLogin)
