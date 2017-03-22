import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a ADD_NOTIFICATION action', () => {
    expect(actions.addNotification()).toEqual({
      type: types.ADD_NOTIFICATION
    })
  })

  it('should create a REMOVE_OLDEST_NOTIFICATION action', () => {
    expect(actions.removeOldestNotification()).toEqual({
      type: types.REMOVE_OLDEST_NOTIFICATION
    })
  })
})
