import * as selectors from './selectors'

describe('getNotifications', () => {
  it('should return notifications state', () => {
    const state = { notifications: ['message'] }
    const actual = selectors.getNotifications(state)
    const expected = state.notifications

    expect(actual).toEqual(expected)
  })
})
