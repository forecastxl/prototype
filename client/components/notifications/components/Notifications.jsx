import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getNotifications } from '../selectors'
import NotificationContainer from './NotificationContainer'
import Notification from './Notification'

export function Notifications({ notifications }) {
  if (notifications.length === 0) {
    return null
  }

  return (
    <NotificationContainer>
      {notifications.map(notification => <Notification>{notification}</Notification>)}
    </NotificationContainer>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  notifications: getNotifications(state)
})

export default connect(mapStateToProps)(Notifications)
