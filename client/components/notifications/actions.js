import * as types from './actionTypes'

export const addNotification = message => ({
  type: types.ADD_NOTIFICATION,
  message
})

export const removeOldestNotification = () => ({
  type: types.REMOVE_OLDEST_NOTIFICATION
})
