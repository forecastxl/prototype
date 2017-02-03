import middleware from './middleware'
import configureStore from '../../store'

describe('token middleware', () => {
  it('should include a token if the includeToken prop is true', () => {
    const store = configureStore({
      user: { token: 'token' }
    }, {})
    const action = {
      type: 'TYPE',
      includeToken: true
    }
    const expected = {
      type: 'TYPE',
      includeToken: true,
      token: 'token'
    }
    const actual = middleware(store)(next => next)(action)

    expect(actual).toEqual(expected)
  })

  it('should not include a token if the includeToken prop is falsey', () => {
    const store = configureStore({
      user: { token: 'token' }
    }, {})
    const action = {
      type: 'TYPE'
    }
    const actual = middleware(store)(next => next)(action)

    expect(actual).toEqual(action)
  })
})
