import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    id: -1,
    firstName: '',
    lastName: '',
    email: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_PROFILE_SUCCESS', () => {
    const payload = {
      id: 1,
      firstName: 'First',
      lastName: 'Last',
      email: 'Mail'
    }
    const actual = reducer(undefined, { type: types.FETCH_PROFILE_SUCCESS, payload })
    const expected = {
      ...payload
    }

    expect(actual).toEqual(expected)
  })
})
