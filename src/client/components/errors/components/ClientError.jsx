import React from 'react'
import { string } from 'prop-types'

function ClientError({ errorMessage }) {
  return (
    <div>
      Something went wrong with this application. The errormessage was: {errorMessage}.
    </div>
  )
}

ClientError.propTypes = {
  errorMessage: string.isRequired
}

export default ClientError
