import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Snackbar from 'material-ui/Snackbar'
import { getNotification } from '../selectors'
import { unsetNotification } from '../actions'

export function Notification({ notification, unsetNotification }) {
  if (!notification.hasNotification) {
    return null
  }

  return (
    <Snackbar
      open
      message={notification.notification}
      autoHideDuration={4000}
      onRequestClose={unsetNotification}
    />
  )
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  unsetNotification: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  notification: getNotification(state)
})

export default connect(mapStateToProps, { unsetNotification })(Notification)
