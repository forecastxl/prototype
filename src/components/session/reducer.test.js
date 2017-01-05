import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    isFetching: false,
    isLoggedIn: false,
    token: ''
  }

  const fetchingState = {
    ...initialState,
    isFetching: true
  }

  const loggedInState = {
    isFetching: false,
    isLoggedIn: true,
    token: 'token'
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_USER', () => {
    const actual = reducer(undefined, { type: types.LOGIN_USER })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_USER_SUCCESS', () => {
    const actual = reducer(fetchingState, {
      type: types.LOGIN_USER_SUCCESS,
      payload: { token: 'token' }
    })

    expect(actual).toEqual(loggedInState)
  })

  it('should handle LOGIN_USER_FAIL', () => {
    const actual = reducer(fetchingState, {
      type: types.LOGIN_USER_FAIL
    })
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('should handle LOGOUT_USER', () => {
    const actual = reducer(loggedInState, {
      type: types.LOGOUT_USER
    })
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
