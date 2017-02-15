import React, { PropTypes } from 'react'
import { Alert } from '../../alert'

function SignupConfirm({ hasToken, isFetching, errors }) {
  if (!hasToken) {
    return <div>Could not find a token. Did you use the correct link?</div>
  }

  if (isFetching) {
    return <div>Confirming account...</div>
  }

  if (errors.token) {
    return <Alert messages={errors.token} />
  }

  return <div>Confirmation successful, logging you in...</div>
}

SignupConfirm.propTypes = {
  hasToken: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default SignupConfirm
