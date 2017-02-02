import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    hasToken: false,
    token: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_SUCCESS', () => {
    const actual = reducer(undefined, { type: types.LOGIN_SUCCESS, token: 'token' })
    const expected = {
      hasToken: true,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle CONFIRM_ACCOUNT_SUCCESS', () => {
    const actual = reducer(undefined, { type: types.CONFIRM_ACCOUNT_SUCCESS, token: 'token' })
    const expected = {
      hasToken: true,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle LOGOUT', () => {
    const initial = { hasToken: true, token: 'token' }
    const actual = reducer(initial, { type: types.LOGOUT })
    const expected = {
      hasToken: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })
})
