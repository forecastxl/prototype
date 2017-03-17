import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errors: {},
    hasError: false,
    hasToken: false,
    isFetching: false,
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

  it('should handle CREATE_SESSION', () => {
    const actual = reducer(undefined, { type: types.CREATE_SESSION })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_SESSION_SUCCESS', () => {
    const actual = reducer(fetchingState, { type: types.CREATE_SESSION_SUCCESS, token: 'token' })
    const expected = {
      errors: {},
      hasError: false,
      hasToken: true,
      isFetching: false,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_SESSION_FAIL', () => {
    const actual = reducer(fetchingState, { type: types.CREATE_SESSION_FAIL, errors: 'errors' })
    const expected = {
      errors: 'errors',
      hasError: true,
      hasToken: false,
      isFetching: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })

  it('should handle DESTROY_SESSION', () => {
    const hasToken = { ...initialState, hasToken: true, token: 'token' }
    const actual = reducer(hasToken, { type: types.DESTROY_SESSION })
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
