import React, { PropTypes } from 'react'

function ForgotPasswordSuccess() {
  return (
    <div>
      If your email is associated to an account with us we will send you an email with a link to reset your password. Check your email to continue.
    </div>
  )
}

ForgotPasswordSuccess.propTypes = {
  email: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default ForgotPasswordSuccess
