import * as selectors from './selectors'

describe('getNotification', () => {
  it('should return notification state', () => {
    const state = { notification: 'notification' }
    const actual = selectors.getNotification(state)
    const expected = 'notification'

    expect(actual).toEqual(expected)
  })
})
