import React from 'react'
import { array } from 'prop-types'
import { connect } from 'react-redux'
import Notifications from 'react-notification-system-redux'
import { getNotificationState } from '../selectors'

export function NotificationsContainer({ notifications }) {
  return <Notifications notifications={notifications} />
}

NotificationsContainer.propTypes = {
  notifications: array.isRequired
}

const mapStateToProps = state => ({
  notifications: getNotificationState(state)
})

export default connect(mapStateToProps)(NotificationsContainer)
