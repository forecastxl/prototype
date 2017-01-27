import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errors: {},
    isFetching: false
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle REQUEST_ACCOUNT', () => {
    const actual = reducer(undefined, { type: types.REQUEST_ACCOUNT })
    const expected = {
      errors: {},
      isFetching: true
    }

    expect(actual).toEqual(expected)
  })

  it('should handle CONFIRM_ACCOUNT', () => {
    const actual = reducer(undefined, { type: types.CONFIRM_ACCOUNT })
    const expected = {
      errors: {},
      isFetching: true
    }

    expect(actual).toEqual(expected)
  })

  it('should handle REQUEST_ACCOUNT_SUCCESS', () => {
    const fetchingState = {
      errors: {},
      isFetching: true
    }
    const actual = reducer(fetchingState, { type: types.REQUEST_ACCOUNT_SUCCESS })
    const expected = {
      errors: {},
      isFetching: false
    }

    expect(actual).toEqual(expected)
  })

  it('should handle CONFIRM_ACCOUNT_SUCCESS', () => {
    const fetchingState = {
      errors: {},
      isFetching: true
    }
    const actual = reducer(fetchingState, { type: types.CONFIRM_ACCOUNT_SUCCESS })
    const expected = {
      errors: {},
      isFetching: false
    }

    expect(actual).toEqual(expected)
  })

  it('should handle REQUEST_ACCOUNT_FAIL', () => {
    const fetchingState = {
      errors: {},
      isFetching: true
    }
    const actual = reducer(fetchingState, {
      type: types.REQUEST_ACCOUNT_FAIL,
      payload: { errors: { error: 'error' } }
    })
    const expected = {
      errors: { error: 'error' },
      isFetching: false
    }

    expect(actual).toEqual(expected)
  })

  it('should handle CONFIRM_ACCOUNT_FAIL', () => {
    const fetchingState = {
      errors: {},
      isFetching: true
    }
    const actual = reducer(fetchingState, {
      type: types.CONFIRM_ACCOUNT_FAIL,
      payload: { errors: { error: 'error' } }
    })
    const expected = {
      errors: { error: 'error' },
      isFetching: false
    }

    expect(actual).toEqual(expected)
  })
})
