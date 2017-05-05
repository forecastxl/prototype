import React, { PropTypes } from 'react'

function ClientError({ errorMessage }) {
  return (
    <div>
      Something went wrong with this application. The errormessage was: {errorMessage}.
    </div>
  )
}

ClientError.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

export default ClientError
