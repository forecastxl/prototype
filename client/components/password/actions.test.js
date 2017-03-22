import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a REQUEST_RESET_PASSWORD action', () => {
    expect(actions.requestResetPassword()).toEqual({
      type: types.REQUEST_RESET_PASSWORD
    })
  })

  it('should create a REQUEST_RESET_PASSWORD_SUCCESS action', () => {
    expect(actions.requestResetPasswordSuccess()).toEqual({
      type: types.REQUEST_RESET_PASSWORD_SUCCESS
    })
  })

  it('should create a REQUEST_RESET_PASSWORD_FAIL action', () => {
    expect(actions.requestResetPasswordFail()).toEqual({
      type: types.REQUEST_RESET_PASSWORD_FAIL
    })
  })

  it('should create a RESET_PASSWORD action', () => {
    expect(actions.resetPassword()).toEqual({
      type: types.RESET_PASSWORD
    })
  })

  it('should create a RESET_PASSWORD_SUCCESS action', () => {
    expect(actions.resetPasswordSuccess()).toEqual({
      type: types.RESET_PASSWORD_SUCCESS
    })
  })

  it('should create a RESET_PASSWORD_FAIL action', () => {
    expect(actions.resetPasswordFail()).toEqual({
      type: types.RESET_PASSWORD_FAIL
    })
  })
})
