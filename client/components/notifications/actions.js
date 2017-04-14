import Notifications from 'react-notification-system-redux'

export const addNotification = ({ level, options }) => Notifications[level](options)
export const hideNotification = uid => Notifications.hide(uid)
