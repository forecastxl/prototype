import React, { PropTypes } from 'react'
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
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired
}

export default Alert
