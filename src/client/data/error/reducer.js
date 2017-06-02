import * as types from './actionTypes'

const initialState = {
  message: '',
  status: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CATCH_ERROR:
      return {
        message: action.payload.message || 'No message was provided',
        status: action.payload.status || ''
      }
    case types.RESOLVE_ERROR:
      return initialState
    default:
      return state
  }
}
