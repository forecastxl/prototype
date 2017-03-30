import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
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
        errorMessage: '',
        profile: {
          ...action.payload
        }
      }
    case types.FETCH_PROFILE_FAILURE:
      return {
        isFetching: false,
        hasProfile: false,
        hasError: true,
        errorMessage: action.payload.message,
        profile: {
          ...initialState.profile
        }
      }
    default:
      return state
  }
}
