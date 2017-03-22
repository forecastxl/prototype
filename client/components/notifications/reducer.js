import * as types from './actionTypes'

export default function reducer(state = [], action) {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return [...state, action.payload]
    case types.REMOVE_OLDEST_NOTIFICATION:
      if (state.length > 0) {
        return state.slice(1)
      }

      return state
    default:
      return state
  }
}
