import React, { PropTypes } from 'react'

function TextFieldErrors({ errors }) {
  return (
    <div>
      {errors.map((error, index) => <p key={index}>{error}</p>)}
    </div>
  )
}

TextFieldErrors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default TextFieldErrors

