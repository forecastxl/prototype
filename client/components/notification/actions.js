import * as types from './actionTypes'

export const setNotification = notification => ({
  type: types.SET_NOTIFICATION,
  notification
})

export const unsetNotification = () => ({
  type: types.UNSET_NOTIFICATION
})
