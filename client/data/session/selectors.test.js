import * as selectors from './selectors'

describe('getToken', () => {
  it('should return the token', () => {
    const state = { session: { token: 'token' } }
    const actual = selectors.getToken(state)
    const expected = 'token'

    expect(actual).toEqual(expected)
  })
})

describe('hasToken', () => {
  it('should return hasToken', () => {
    const state = { session: { hasToken: true } }
    const actual = selectors.hasToken(state)
    const expected = true

    expect(actual).toEqual(expected)
  })
})
