import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const defaultMessage = 'No message was provided'
  const initialState = {
    message: '',
    status: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle CATCH_ERROR', () => {
    const payload = { message: 'message', status: 412 }
    const actual = reducer(undefined, { type: types.CATCH_ERROR, payload })
    const expected = { ...initialState, ...payload }

    expect(actual).toEqual(expected)
  })

  it('should handle CATCH_ERROR for errors without a message', () => {
    const payload = { status: 412 }
    const actual = reducer(undefined, { type: types.CATCH_ERROR, payload })
    const expected = { ...initialState, ...payload, message: defaultMessage }

    expect(actual).toEqual(expected)
  })

  it('should handle CATCH_ERROR for errors without a status', () => {
    const payload = { message: 'message' }
    const actual = reducer(undefined, { type: types.CATCH_ERROR, payload })
    const expected = { ...initialState, ...payload }

    expect(actual).toEqual(expected)
  })

  it('should handle RESOLVE_ERROR', () => {
    const hasError = { message: 'message', status: 412 }
    const actual = reducer(hasError, { type: types.RESOLVE_ERROR })
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
