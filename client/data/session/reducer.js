import * as types from './actionTypes'

const initialState = {
  errors: {},
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
        errors: {},
        hasError: false,
        hasToken: true,
        isFetching: false,
        token: action.payload
      }
    case types.CREATE_SESSION_FAIL:
      return {
        errors: {
          ...action.payload.errors
        },
        hasError: true,
        hasToken: false,
        isFetching: false,
        token: ''
      }
    case types.DESTROY_SESSION:
      return {
        errors: {},
        hasError: false,
        hasToken: false,
        isFetching: false,
        token: ''
      }
    default:
      return state
  }
}
