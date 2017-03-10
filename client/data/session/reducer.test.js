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

  it('should handle CREATE_SESSION', () => {
    const actual = reducer(undefined, { type: types.CREATE_SESSION, token: 'token' })
    const expected = {
      hasToken: true,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle DESTROY_SESSION', () => {
    const hasToken = { hasToken: true, token: 'token' }
    const actual = reducer(hasToken, { type: types.DESTROY_SESSION })
    const expected = {
      hasToken: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })
})
