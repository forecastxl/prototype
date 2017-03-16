import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a REQUEST_RESET_PASSWORD action', () => {
    const actual = actions.requestResetPassword('email')
    const expected = {
      type: types.REQUEST_RESET_PASSWORD,
      email: 'email'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a REQUEST_RESET_PASSWORD_SUCCESS action', () => {
    const actual = actions.requestResetPasswordSuccess()
    const expected = { type: types.REQUEST_RESET_PASSWORD_SUCCESS }

    expect(actual).toEqual(expected)
  })

  it('should create a REQUEST_RESET_PASSWORD_FAIL action', () => {
    const actual = actions.requestResetPasswordFail('errors')
    const expected = {
      type: types.REQUEST_RESET_PASSWORD_FAIL,
      errors: 'errors'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a RESET_PASSWORD action', () => {
    const actual = actions.resetPassword('payload')
    const expected = {
      type: types.RESET_PASSWORD,
      payload: 'payload'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a RESET_PASSWORD_SUCCESS action', () => {
    const actual = actions.resetPasswordSuccess('token')
    const expected = {
      type: types.RESET_PASSWORD_SUCCESS,
      token: 'token'
    }

    expect(actual).toEqual(expected)
  })

  it('should create a RESET_PASSWORD_FAIL action', () => {
    const actual = actions.resetPasswordFail('errors')
    const expected = {
      type: types.RESET_PASSWORD_FAIL,
      errors: 'errors'
    }

    expect(actual).toEqual(expected)
  })
})
