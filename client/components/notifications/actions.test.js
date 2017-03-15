import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a SET_NOTIFICATION action', () => {
    const actual = actions.setNotification('notification')
    const expected = {
      type: types.SET_NOTIFICATION,
      notification: 'notification'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a UNSET_NOTIFICATION action', () => {
    const actual = actions.unsetNotification()
    const expected = { type: types.UNSET_NOTIFICATION }

    expect(actual).toEqual(expected)
  })
})
