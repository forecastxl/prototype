import * as types from './actionTypes'

const initialState = {
  isFetching: false
}

export default function session(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        isFetching: true
      }
    case types.LOGIN_USER_SUCCESS:
      return {
        isFetching: false
      }
    case types.LOGIN_USER_FAIL:
      return {
        isFetching: false
      }
    default:
      return state
  }
}
