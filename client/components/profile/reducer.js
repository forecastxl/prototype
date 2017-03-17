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
        id: action.data.id,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        email: action.data.email
      }
    default:
      return state
  }
}
