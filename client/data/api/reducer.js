import { actionTypes as user } from '../../components/user'
import { actionTypes as profile } from '../../components/profile'

const initialState = {
  [profile.UPDATE_PASSWORD]: {
    errors: {},
    isFetching: false
  },
  [profile.UPDATE_PROFILE]: {
    errors: {},
    isFetching: false
  },
  [user.LOGIN]: {
    errors: {},
    isFetching: false
  },
  [user.CREATE_ACCOUNT]: {
    errors: {},
    isFetching: false
  },
  [user.CONFIRM_ACCOUNT]: {
    errors: {},
    isFetching: false
  },
  [user.RESET_PASSWORD]: {
    errors: {},
    isFetching: false
  },
  [user.REQUEST_RESET_PASSWORD]: {
    errors: {},
    isFetching: false
  }
}

export default function reducer(state = initialState, action) {
  if (action.api) {
    const { key, isFetching, errors } = action.api
    return {
      ...state,
      [key]: { isFetching, errors }
    }
  }

  return state
}
