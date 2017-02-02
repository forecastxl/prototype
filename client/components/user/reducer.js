import * as types from './actionTypes'

const initialState = {
  hasToken: false,
  token: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.CONFIRM_ACCOUNT_SUCCESS:
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        hasToken: true,
        token: action.token
      }
    case types.LOGOUT:
      return {
        ...state,
        hasToken: false,
        token: ''
      }
    default:
      return state
  }
}
