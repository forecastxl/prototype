import React, { PropTypes } from 'react'

function TextFieldErrors({ errors }) {
  return (
    <div>
      {errors.map(error => <p key={error}>{error}</p>)}
    </div>
  )
}

TextFieldErrors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default TextFieldErrors
