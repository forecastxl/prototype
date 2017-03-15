import reducer from './reducer'
import * as types from './actionTypes'

describe('reducer', () => {
  const initialState = {
    hasNotification: false,
    notification: ''
  }

  it('should return the initial state', () => {
    const actual = reducer(undefined, {})
    const expected = initialState
    expect(actual).toEqual(expected)
  })

  it('should handle SET_NOTIFICATION', () => {
    const actual = reducer(undefined, {
      type: types.SET_NOTIFICATION,
      notification: 'notification'
    })
    const expected = {
      hasNotification: true,
      notification: 'notification'
    }

    expect(actual).toEqual(expected)
  })

  it('should handle UNSET_NOTIFICATION', () => {
    const hasNotification = {
      hasNotification: true,
      notification: 'notification'
    }
    const actual = reducer(hasNotification, {
      type: types.UNSET_NOTIFICATION,
      notification: 'notification'
    })

    expect(actual).toEqual(initialState)
  })
})

