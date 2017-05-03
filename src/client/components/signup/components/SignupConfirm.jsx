import React, { PropTypes } from 'react'

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
  hasToken: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default SignupConfirm
