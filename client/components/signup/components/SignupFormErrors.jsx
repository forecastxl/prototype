import React, { PropTypes } from 'react'

function SignupFormErrors({ errors }) {
  return (
    <div>
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </div>
  )
}

SignupFormErrors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default SignupFormErrors
