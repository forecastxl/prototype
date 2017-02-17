import * as types from './actionTypes'

const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PROFILE_SUCCESS:
      return {
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        email: action.data.email
      }
    default:
      return state
  }
}
