import * as types from './actionTypes'

const initialState = {
  errors: {},
  isFetching: false,
  isValid: false,
  token: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_TOKEN:
      return {
        ...state,
        isFetching: true
      }
    case types.REQUEST_TOKEN_SUCCESS:
      return {
        errors: {},
        isFetching: false,
        isValid: true,
        token: action.payload.token
      }
    case types.REQUEST_TOKEN_FAIL:
      return {
        ...state,
        errors: action.payload.errors,
        isFetching: false
      }
    case types.RECEIVE_TOKEN:
      return {
        ...state,
        isValid: true,
        token: action.payload.token
      }
    case types.DESTROY_TOKEN:
      return {
        ...state,
        isValid: false,
        token: ''
      }
    default:
      return state
  }
}
