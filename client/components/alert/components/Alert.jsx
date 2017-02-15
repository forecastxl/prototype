import React, { PropTypes } from 'react'
import AlertWrapper from './AlertWrapper'

function Alert({ messages }) {
  if (typeof messages === 'string') {
    return <AlertWrapper>{messages}</AlertWrapper>
  }

  return (
    <AlertWrapper>
      {messages.map(message => <p key={message}>{message}</p>)}
    </AlertWrapper>
  )
}

Alert.propTypes = {
  messages: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
}

export default Alert
