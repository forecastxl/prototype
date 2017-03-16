import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a ADD_NOTIFICATION action', () => {
    const actual = actions.addNotification('message')
    const expected = {
      type: types.ADD_NOTIFICATION,
      message: 'message'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a REMOVE_OLDEST_NOTIFICATION action', () => {
    const actual = actions.removeOldestNotification()
    const expected = { type: types.REMOVE_OLDEST_NOTIFICATION }

    expect(actual).toEqual(expected)
  })
})
