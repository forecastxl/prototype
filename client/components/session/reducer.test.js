import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errors: {},
    isFetching: false,
    isLoggedIn: false,
    token: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_USER', () => {
    const actual = reducer(undefined, { type: types.LOGIN_USER })
    const expected = {
      errors: {},
      isFetching: true,
      isLoggedIn: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_USER_SUCCESS', () => {
    const fetchingState = {
      ...initialState,
      isFetching: true
    }
    const actual = reducer(fetchingState, {
      type: types.LOGIN_USER_SUCCESS,
      payload: { token: 'token' }
    })
    const expected = {
      errors: {},
      isFetching: false,
      isLoggedIn: true,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_USER_FAIL', () => {
    const fetchingState = {
      ...initialState,
      isFetching: true
    }
    const actual = reducer(fetchingState, {
      type: types.LOGIN_USER_FAIL,
      payload: { errors: { error: 'error' } }
    })
    const expected = {
      errors: { error: 'error' },
      isFetching: false,
      isLoggedIn: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })

  it('should handle LOGOUT_USER', () => {
    const loggedInState = {
      errors: {},
      isFetching: false,
      isLoggedIn: true,
      token: 'token'
    }
    const actual = reducer(loggedInState, {
      type: types.LOGOUT_USER
    })
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
