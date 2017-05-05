import * as selectors from './selectors'

describe('getSessionState', () => {
  it('should return the state', () => {
    const sessionState = { state: 'state' }
    const state = { session: sessionState }
    const actual = selectors.getSessionState(state)
    const expected = sessionState

    expect(actual).toEqual(expected)
  })
})

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
