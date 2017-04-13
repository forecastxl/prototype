import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
  hasError: false,
  hasToken: false,
  isFetching: false,
  token: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUBMIT:
      return {
        ...state,
        isFetching: true
      }
    case types.LOGIN_SUCCESS:
      return {
        errorMessage: '',
        hasError: false,
        hasToken: true,
        isFetching: false,
        token: action.payload
      }
    case types.LOGIN_VALIDATION_FAILURE:
      return {
        errorMessage: '',
        hasError: false,
        hasToken: false,
        isFetching: false,
        token: ''
      }
    case types.LOGIN_CLIENT_FAILURE:
    case types.LOGIN_SERVER_FAILURE:
      return {
        errorMessage: action.payload.message,
        hasError: true,
        hasToken: false,
        isFetching: false,
        token: ''
      }
    case types.LOGOUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}
