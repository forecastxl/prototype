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
    case types.CREATE_SESSION:
      return {
        ...state,
        isFetching: true
      }
    case types.CREATE_SESSION_SUCCESS:
      return {
        errorMessage: '',
        hasError: false,
        hasToken: true,
        isFetching: false,
        token: action.payload
      }
    case types.CREATE_SESSION_FAILURE:
      return {
        errorMessage: action.payload.message,
        hasError: true,
        hasToken: false,
        isFetching: false,
        token: ''
      }
    case types.DESTROY_SESSION:
      return {
        ...initialState
      }
    default:
      return state
  }
}
