import React, { PropTypes } from 'react'
import AlertWrapper from './AlertWrapper'

function Alert({ messages }) {
  return (
    <AlertWrapper>
      {messages.map(message => <p key={message}>{message}</p>)}
    </AlertWrapper>
  )
}

Alert.propTypes = {
  messages: PropTypes.array.isRequired
}

export default Alert
