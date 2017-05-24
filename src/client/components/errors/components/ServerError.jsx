import React from 'react'
import { string } from 'prop-types'

function ServerError({ errorMessage }) {
  return (
    <div>
      Something went wrong with our server. The errormessage was: {errorMessage}.
    </div>
  )
}

ServerError.propTypes = {
  errorMessage: string.isRequired
}

export default ServerError
