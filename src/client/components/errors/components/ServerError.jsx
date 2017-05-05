import React, { PropTypes } from 'react'

function ServerError({ errorMessage }) {
  return (
    <div>
      Something went wrong with our server. The errormessage was: {errorMessage}.
    </div>
  )
}

ServerError.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

export default ServerError
