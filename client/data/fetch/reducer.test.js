import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    error: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle FETCH_FAIL', () => {
    const actual = reducer(undefined, { type: types.FETCH_FAIL, errorMessage: 'message' })
    const expected = {
      error: 'message'
    }

    expect(actual).toEqual(expected)
  })
})
