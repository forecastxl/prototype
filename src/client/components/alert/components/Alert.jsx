import React from 'react'
import { string, oneOf } from 'prop-types'
import AlertWrapper from './AlertWrapper'
import AlertIcon from './AlertIcon'

function Alert({ message, type }) {
  return (
    <AlertWrapper type={type}>
      <AlertIcon type={type} />
      <span>{message}</span>
    </AlertWrapper>
  )
}

Alert.propTypes = {
  message: string.isRequired,
  type: oneOf(['error', 'warning', 'info', 'success']).isRequired
}

export default Alert
