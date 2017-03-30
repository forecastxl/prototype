import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errorMessage: '',
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

  it('should handle LOGIN_SUBMIT', () => {
    const actual = reducer(undefined, { type: types.LOGIN_SUBMIT })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_SUCCESS', () => {
    const actual = reducer(fetchingState, { type: types.LOGIN_SUCCESS, payload: 'token' })
    const expected = {
      errorMessage: '',
      hasError: false,
      hasToken: true,
      isFetching: false,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle LOGIN_FAILURE', () => {
    const payload = new Error('Something went wrong')
    const actual = reducer(
      fetchingState,
      { type: types.LOGIN_FAILURE, payload }
    )
    const expected = {
      ...initialState,
      errorMessage: 'Something went wrong',
      hasError: true
    }

    expect(actual).toEqual(expected)
  })

  it('should handle LOGOUT', () => {
    const hasToken = { ...initialState, hasToken: true, token: 'token' }
    const actual = reducer(hasToken, { type: types.LOGOUT })
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
