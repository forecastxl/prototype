import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Error = styled.p`
  color: red;
`

function ErrorList({ errors }) {
  return (
    <div>
      {errors.map(error => <Error key={error}>{error}</Error>)}
    </div>
  )
}

ErrorList.propTypes = {
  errors: PropTypes.array.isRequired
}

export default ErrorList
