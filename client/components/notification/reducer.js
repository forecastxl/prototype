import * as types from './actionTypes'

const initialState = {
  hasNotification: false,
  notification: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_NOTIFICATION:
      return {
        hasNotification: true,
        notification: action.notification
      }
    case types.UNSET_NOTIFICATION:
      return {
        ...initialState
      }
    default:
      return state
  }
}
