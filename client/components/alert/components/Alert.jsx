import React, { PropTypes } from 'react'
import AlertBox from './AlertBox'

function Alert({ messages }) {
  return (
    <AlertBox>
      {messages.map(message => <p key={message}>{message}</p>)}
    </AlertBox>
  )
}

Alert.propTypes = {
  messages: PropTypes.array.isRequired
}

export default Alert
