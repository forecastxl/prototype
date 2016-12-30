import * as types from './actionTypes'
import * as actions from './actions'

describe('login actioncreators', () => {
  it('should create a LOGIN_USER action', () => {
    const actual = actions.loginUser()
    const expected = {
      type: types.LOGIN_USER
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGIN_USER_SUCCESS action', () => {
    const actual = actions.loginUserSuccess()
    const expected = {
      type: types.LOGIN_USER_SUCCESS
    }

    expect(actual).toEqual(expected)
  })

  it('should create a LOGIN_USER_FAIL action', () => {
    const actual = actions.loginUserFail()
    const expected = {
      type: types.LOGIN_USER_FAIL
    }

    expect(actual).toEqual(expected)
  })
})
