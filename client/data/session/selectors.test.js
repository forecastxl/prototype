import * as selectors from './selectors'

describe('getToken', () => {
  it('should return the token', () => {
    const state = { session: { token: 'token' } }
    const actual = selectors.getToken(state)
    const expected = 'token'

    expect(actual).toEqual(expected)
  })
})
