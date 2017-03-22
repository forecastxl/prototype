import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = []
    expect(actual).toEqual(expected)
  })

  it('should handle ADD_NOTIFICATION', () => {
    const actual = reducer(undefined, {
      type: types.ADD_NOTIFICATION,
      payload: 'message'
    })
    const expected = ['message']

    expect(actual).toEqual(expected)
  })

  it('should handle REMOVE_OLDEST_NOTIFICATION when there are multiple notifications', () => {
    const actual = reducer(['oldest', 'newest'], {
      type: types.REMOVE_OLDEST_NOTIFICATION
    })
    const expected = ['newest']

    expect(actual).toEqual(expected)
  })

  it('should handle REMOVE_OLDEST_NOTIFICATION when there are no notifications', () => {
    const actual = reducer([], {
      type: types.REMOVE_OLDEST_NOTIFICATION
    })
    const expected = []

    expect(actual).toEqual(expected)
  })
})
