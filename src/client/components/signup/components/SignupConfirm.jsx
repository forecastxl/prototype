import React from 'react'
import { bool } from 'prop-types'

function SignupConfirm({ hasToken, isFetching }) {
  if (!hasToken) {
    return <div>Could not find a token. Did you use the correct link?</div>
  }

  if (isFetching) {
    return <div>Confirming account...</div>
  }

  return <div>Confirmation successful, logging you in...</div>
}

SignupConfirm.propTypes = {
  hasToken: bool.isRequired,
  isFetching: bool.isRequired
}

export default SignupConfirm
