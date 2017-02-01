import * as types from './actionTypes'

const initialState = {
  hasToken: false,
  token: '',
  confirmAccount: {
    isFetching: false,
    errors: {}
  },
  createAccount: {
    isFetching: false,
    errors: {}
  },
  login: {
    isFetching: false,
    errors: {}
  },
  requestPasswordChange: {
    isFetching: false,
    errors: {}
  },
  changePassword: {
    isFetching: false,
    errors: {}
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.CONFIRM_ACCOUNT_SUCCESS:
      return {
        ...state,
        hasToken: true,
        token: action.token
      }
    case types.LOGOUT:
      return {
        ...state,
        hasToken: false,
        token: ''
      }
    default:
      if (action.fetch) {
        const { isFetching, errors } = action.fetch
        return { ...state, [action.fetch.key]: { isFetching, errors } }
      }

      return state
  }
}
