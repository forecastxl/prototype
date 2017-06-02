import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    errorMessage: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle CATCH_ERROR', () => {
    const actual = reducer(undefined, { type: types.CATCH_ERROR, payload: { message: 'message' } })
    const expected = { ...initialState, errorMessage: 'message' }

    expect(actual).toEqual(expected)
  })
})
