import * as types from './actionTypes'

const initialState = {
  errors: {},
  isFetching: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RESET_PASSWORD:
      return {
        ...state,
        isFetching: true
      }
    case types.RESET_PASSWORD_SUCCESS:
      return {
        errors: {},
        isFetching: false
      }
    case types.RESET_PASSWORD_FAIL:
      return {
        errors: action.payload.errors,
        isFetching: false
      }
    default:
      return state
  }
}
