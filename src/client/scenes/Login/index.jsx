import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectors } from '../../data/session'
import { LoginForm } from '../../components/login'

function DumbLogin({ session }) {
  if (session.errorMessage) {
    return <div>{session.errorMessage}</div>
  }

  return <LoginForm />
}

DumbLogin.propTypes = {
  session: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  session: selectors.getSessionState(state)
})

export default connect(mapStateToProps)(DumbLogin)
