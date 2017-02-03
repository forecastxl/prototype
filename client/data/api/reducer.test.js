import reducer from './reducer'
import { actionTypes as user } from '../../components/user'

describe('reducer', () => {
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

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle actions with an api key', () => {
    const action = {
      type: 'action',
      api: {
        key: user.LOGIN,
        isFetching: true,
        errors: {}
      }
    }
    const actual = reducer(undefined, action)
    const expected = {
      ...initialState,
      [user.LOGIN]: {
        errors: {},
        isFetching: true
      }
    }

    expect(actual).toEqual(expected)
  })
})
