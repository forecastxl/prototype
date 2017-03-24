import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../data/session'
import { LoginForm } from '../../components/login'

export function Scene({ createSession }) {
  return (
    <LoginForm onSubmit={createSession} />
  )
}

Scene.propTypes = {
  createSession: PropTypes.func.isRequired
}

export default connect(null, { createSession: actions.createSession })(Scene)
