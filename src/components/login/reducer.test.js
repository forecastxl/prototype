import reducer from './reducer'
import * as types from './actionTypes'

describe('login reducer', () => {
  const initialState = {
    isFetching: false,
    isLoggedIn: false,
    token: ''
  }

  const fetchingState = {
    ...initialState,
    isFetching: true
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
    const payload = {
      token: 'token'
    }
    const actual = reducer(fetchingState, {
      type: types.LOGIN_USER_SUCCESS,
      payload
    })
    const expected = {
      isFetching: false,
      isLoggedIn: true,
      token: payload.token
    }

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_USER_FAIL', () => {
    const actual = reducer(fetchingState, {
      type: types.LOGIN_USER_FAIL
    })
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
