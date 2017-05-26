import React from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import { selectors } from '../../data/session'
import { ClientError, ServerError } from '../../components/errors'
import { Card } from '../../components/card'
import { LoginForm } from '../../components/login'

export function DumbLogin({ session }) {
  if (session.errorName === 'ClientError') {
    return <ClientError errorMessage={session.errorMessage} />
  }

  if (session.errorName === 'ServerError') {
    return <ServerError errorMessage={session.errorMessage} />
  }

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
