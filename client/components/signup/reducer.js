import * as types from './actionTypes'

const initialState = {
  errors: {},
  isFetching: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_ACCOUNT:
    case types.CONFIRM_ACCOUNT:
      return {
        ...state,
        isFetching: true
      }
    case types.REQUEST_ACCOUNT_SUCCESS:
    case types.CONFIRM_ACCOUNT_SUCCESS:
      return {
        errors: {},
        isFetching: false
      }
    case types.REQUEST_ACCOUNT_FAIL:
    case types.CONFIRM_ACCOUNT_FAIL:
      return {
        errors: action.payload.errors,
        isFetching: false
      }
    default:
      return state
  }
}
