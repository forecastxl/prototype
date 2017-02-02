import { actionTypes as user } from '../../components/user'

const initialState = {
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
