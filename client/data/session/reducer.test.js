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

  it('should handle CREATE_SESSION', () => {
    const actual = reducer(undefined, { type: types.CREATE_SESSION })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_SESSION_SUCCESS', () => {
    const actual = reducer(fetchingState, { type: types.CREATE_SESSION_SUCCESS, payload: 'token' })
    const expected = {
      errorMessage: '',
      hasError: false,
      hasToken: true,
      isFetching: false,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle CREATE_SESSION_FAILURE', () => {
    const payload = new Error('Something went wrong')
    const actual = reducer(
      fetchingState,
      { type: types.CREATE_SESSION_FAILURE, payload }
    )
    const expected = {
      ...initialState,
      errorMessage: 'Something went wrong',
      hasError: true
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
