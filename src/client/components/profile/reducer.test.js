import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errorMessage: '',
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

  it('should handle FETCH_PROFILE_FAILURE', () => {
    const payload = new Error('Something went wrong')
    const actual = reducer(fetchingState, { type: types.FETCH_PROFILE_FAILURE, payload })
    const expected = {
      ...initialState,
      hasError: true,
      errorMessage: 'Something went wrong'
    }

    expect(actual).toEqual(expected)
  })
})
