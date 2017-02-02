import React, { PropTypes } from 'react'
import { ErrorList } from '../../errors'

function ResetPassword({ hasToken, isFetching, errors }) {
  if (!hasToken) {
    return <div>Could not find a token. Did you use the correct link?</div>
  }

  if (isFetching) {
    return <div>Resetting password...</div>
  }

  if (errors.token) {
    return <ErrorList errors={errors.token} />
  }

  return <div>Reset successful, logging you in...</div>
}

ResetPassword.propTypes = {
  hasToken: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default ResetPassword
