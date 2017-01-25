import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Error = styled.p`
  color: red;
`

function BaseErrors({ errors }) {
  return (
    <div>
      {errors.map((error, index) => <Error key={index}>{error}</Error>)}
    </div>
  )
}

BaseErrors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default BaseErrors
