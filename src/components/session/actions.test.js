import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a LOGIN_USER action', () => {
    const actual = actions.loginUser('payload')
    const expected = {
      type: types.LOGIN_USER,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGIN_USER_SUCCESS action', () => {
    const actual = actions.loginUserSuccess('payload')
    const expected = {
      type: types.LOGIN_USER_SUCCESS,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGIN_USER_FAIL action', () => {
    const actual = actions.loginUserFail('payload')
    const expected = {
      type: types.LOGIN_USER_FAIL,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGOUT_USER action', () => {
    const actual = actions.loginUserFail()
    const expected = {
      type: types.LOGIN_USER_FAIL
    }

    expect(actual).toEqual(expected)
  })
})
