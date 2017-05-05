import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
  errorName: '',
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
        errorName: '',
        hasError: false,
        hasToken: true,
        isFetching: false,
        token: action.payload
      }
    case types.LOGIN_VALIDATION_FAILURE:
      return {
        errorMessage: '',
        errorName: '',
        hasError: false,
        hasToken: false,
        isFetching: false,
        token: ''
      }
    case types.LOGIN_CLIENT_FAILURE:
      return {
        errorMessage: action.payload.message,
        errorName: 'ClientError',
        hasError: true,
        hasToken: false,
        isFetching: false,
        token: ''
      }
    case types.LOGIN_SERVER_FAILURE:
      return {
        errorMessage: action.payload.message,
        errorName: 'ServerError',
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
