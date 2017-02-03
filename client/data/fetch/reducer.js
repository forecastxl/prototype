import * as types from './actionTypes'

const initialState = {
  error: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FAIL:
      return {
        error: action.errorMessage
      }
    default:
      return state
  }
}
