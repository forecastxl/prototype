import * as types from './actionTypes'

const initialState = {
  hasToken: false,
  token: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_SESSION:
      return {
        hasToken: true,
        token: action.token
      }
    case types.DESTROY_SESSION:
      return {
        hasToken: false,
        token: ''
      }
    default:
      return state
  }
}
