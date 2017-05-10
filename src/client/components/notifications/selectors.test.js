import * as selectors from './selectors'

describe('getNotificationState', () => {
  it('should return notifications state', () => {
    const state = { notifications: ['message'] }
    const actual = selectors.getNotificationState(state)
    const expected = state.notifications

    expect(actual).toEqual(expected)
  })
})
