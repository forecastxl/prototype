import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getNotifications } from '../selectors'
import NotificationBox from './NotificationBox'
import Notification from './Notification'

export function NotificationContainer({ notifications }) {
  if (notifications.length === 0) {
    return null
  }

  return (
    <NotificationBox>
      {notifications.map(notification => (
        <Notification key={notification}>
          {notification}
        </Notification>
      ))}
    </NotificationBox>
  )
}

NotificationContainer.propTypes = {
  notifications: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  notifications: getNotifications(state)
})

export default connect(mapStateToProps)(NotificationContainer)
