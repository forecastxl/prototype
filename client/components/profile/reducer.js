import * as types from './actionTypes'

const initialState = {
  id: -1,
  firstName: '',
  lastName: '',
  email: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PROFILE_SUCCESS:
      return {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email
      }
    default:
      return state
  }
}
