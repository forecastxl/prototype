import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errors: {},
    hasError: false,
    hasProfile: false,
    isFetching: false,
    profile: {
      id: 0,
      firstName: '',
      lastName: '',
      email: ''
    }
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

  it('should handle FETCH_PROFILE', () => {
    const actual = reducer(undefined, { type: types.FETCH_PROFILE })
    const expected = fetchingState

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_PROFILE_SUCCESS', () => {
    const payload = {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
      email: 'Mail'
    }
    const actual = reducer(fetchingState, { type: types.FETCH_PROFILE_SUCCESS, payload })
    const expected = {
      ...initialState,
      hasProfile: true,
      profile: {
        ...payload
      }
    }

    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_PROFILE_FAIL', () => {
    const payload = {
      errors: { error: 'error' }
    }
    const actual = reducer(fetchingState, { type: types.FETCH_PROFILE_FAIL, payload })
    const expected = {
      ...initialState,
      hasError: true,
      errors: {
        ...payload.errors
      }
    }

    expect(actual).toEqual(expected)
  })
})
