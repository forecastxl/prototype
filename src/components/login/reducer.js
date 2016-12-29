import * as types from './actionTypes'

const initialState = {
  isFetching: false,
  isLoggedIn: false,
  token: ''
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        isFetching: true
      }
    case types.LOGIN_USER_SUCCESS:
      return {
        isFetching: false,
        isLoggedIn: true,
        token: action.payload.token
      }
    case types.LOGIN_USER_FAIL:
      return {
        isFetching: false,
        isLoggedIn: false,
        token: ''
      }
    default:
      return state
  }
}
