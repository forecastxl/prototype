import * as selectors from './selectors'

describe('getProfile', () => {
  it('should return profile', () => {
    const state = { profile: { profile: 'profile' } }
    const actual = selectors.getProfile(state)
    const expected = 'profile'

    expect(actual).toEqual(expected)
  })
})
