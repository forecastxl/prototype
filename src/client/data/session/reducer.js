import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
  errorName: '',
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
        isFetching: false,
        token: action.payload
      }
    case types.LOGIN_FAILURE:
      return {
        errorMessage: '',
        errorName: '',
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
