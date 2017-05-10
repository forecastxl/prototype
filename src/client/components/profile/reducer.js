import * as types from './actionTypes'

const initialState = {
  errorMessage: '',
  isFetching: false,
  profile: {}
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
        errorMessage: '',
        isFetching: false,
        profile: {
          ...action.payload
        }
      }
    case types.FETCH_PROFILE_FAILURE:
      return {
        errorMessage: action.payload.message,
        isFetching: false,
        profile: {}
      }
    default:
      return state
  }
}
