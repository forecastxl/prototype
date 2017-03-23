import * as types from './actionTypes'

const initialState = {
  errors: {},
  hasError: false,
  hasProfile: false,
  isFetching: false,
  profile: {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PROFILE:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_PROFILE_SUCCESS:
      return {
        isFetching: false,
        hasProfile: true,
        hasError: false,
        errors: {},
        profile: {
          ...action.payload
        }
      }
    case types.FETCH_PROFILE_FAIL:
      return {
        isFetching: false,
        hasProfile: false,
        hasError: true,
        errors: {
          ...action.payload.errors
        },
        profile: {
          ...initialState.profile
        }
      }
    default:
      return state
  }
}
