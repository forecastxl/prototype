import * as types from './actionTypes'

const initialState = {
  errorMessage: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CATCH_ERROR:
      return {
        errorMessage: action.payload
      }
    default:
      return state
  }
}
