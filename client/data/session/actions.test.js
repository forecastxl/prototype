import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CREATE_SESSION action', () => {
    const user = 'user'
    const actual = actions.createSession(user)
    const expected = {
      type: types.CREATE_SESSION,
      user
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CREATE_SESSION_SUCCESS action', () => {
    const token = 'token'
    const actual = actions.createSessionSuccess(token)
    const expected = {
      type: types.CREATE_SESSION_SUCCESS,
      token
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CREATE_SESSION_FAIL action', () => {
    const errors = 'errors'
    const actual = actions.createSessionFail(errors)
    const expected = {
      type: types.CREATE_SESSION_FAIL,
      errors
    }

    expect(actual).toEqual(expected)
  })

  it('should create a DESTROY_SESSION action', () => {
    const actual = actions.destroySession()
    const expected = {
      type: types.DESTROY_SESSION
    }

    expect(actual).toEqual(expected)
  })
})
