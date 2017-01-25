import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errors: {},
    isFetching: false,
    isValid: false,
    token: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle REQUEST_TOKEN', () => {
    const actual = reducer(undefined, { type: types.REQUEST_TOKEN })
    const expected = {
      errors: {},
      isFetching: true,
      isValid: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })

  it('should handle REQUEST_TOKEN_SUCCESS', () => {
    const fetchingState = {
      ...initialState,
      isFetching: true
    }
    const actual = reducer(fetchingState, {
      type: types.REQUEST_TOKEN_SUCCESS,
      payload: { token: 'token' }
    })
    const expected = {
      errors: {},
      isFetching: false,
      isValid: true,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle REQUEST_TOKEN_FAIL', () => {
    const fetchingState = {
      ...initialState,
      isFetching: true
    }
    const actual = reducer(fetchingState, {
      type: types.REQUEST_TOKEN_FAIL,
      payload: { errors: { error: 'error' } }
    })
    const expected = {
      errors: { error: 'error' },
      isFetching: false,
      isValid: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })

  it('should handle DESTROY_TOKEN', () => {
    const tokenState = {
      ...initialState,
      token: 'token',
      isValid: true
    }
    const actual = reducer(tokenState, {
      type: types.DESTROY_TOKEN
    })
    const expected = {
      errors: {},
      isFetching: false,
      isValid: false,
      token: ''
    }

    expect(actual).toEqual(expected)
  })
})
