import middleware from './middleware'
import configureStore from '../../store'
import { constants } from '../../components/session'

describe('token middleware', () => {
  it('should include a token if the token prop is true', () => {
    const store = configureStore({
      [constants.NAME]: { token: 'token' }
    }, {})
    const action = {
      type: 'TYPE',
      token: true
    }
    const expected = {
      type: 'TYPE',
      token: 'token'
    }
    const actual = middleware(store)(next => next)(action)

    expect(actual).toEqual(expected)
  })

  it('should not include a token if the token prop is falsey', () => {
    const store = configureStore({
      [constants.NAME]: { token: 'token' }
    }, {})
    const action = {
      type: 'TYPE'
    }
    const actual = middleware(store)(next => next)(action)

    expect(actual).toEqual(action)
  })
})
