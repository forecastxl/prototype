import * as types from './actionTypes'

const initialState = {
  errors: {},
  isFetching: false,
  isLoggedIn: false,
  token: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        isFetching: true
      }
    case types.LOGIN_USER_SUCCESS:
      return {
        errors: {},
        isFetching: false,
        isLoggedIn: true,
        token: action.payload.token
      }
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        errors: action.payload.errors,
        isFetching: false
      }
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        token: ''
      }
    default:
      return state
  }
}
