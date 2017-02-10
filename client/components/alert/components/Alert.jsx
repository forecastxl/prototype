import React, { PropTypes } from 'react'
import AlertWrapper from './AlertWrapper'

function Alert({ messages }) {
  if (typeof messages === 'string') {
    return <AlertWrapper>{messages}</AlertWrapper>
  }

  return (
    <div>
      {messages.map(message => <AlertWrapper key={message}>{message}</AlertWrapper>)}
    </div>
  )
}

Alert.propTypes = {
  messages: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]).isRequired
}

export default Alert
