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

  it('should create a REQUEST_RESET_PASSWORD_VALIDATION_FAILURE action', () => {
    expect(actions.requestResetPasswordValidationFailure()).toEqual({
      type: types.REQUEST_RESET_PASSWORD_VALIDATION_FAILURE
    })
  })

  it('should create a REQUEST_RESET_PASSWORD_CLIENT_FAILURE action', () => {
    expect(actions.requestResetPasswordClientFailure()).toEqual({
      type: types.REQUEST_RESET_PASSWORD_CLIENT_FAILURE
    })
  })

  it('should create a REQUEST_RESET_PASSWORD_SERVER_FAILURE action', () => {
    expect(actions.requestResetPasswordServerFailure()).toEqual({
      type: types.REQUEST_RESET_PASSWORD_SERVER_FAILURE
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

  it('should create a RESET_PASSWORD_VALIDATION_FAILURE action', () => {
    expect(actions.resetPasswordValidationFailure()).toEqual({
      type: types.RESET_PASSWORD_VALIDATION_FAILURE
    })
  })

  it('should create a RESET_PASSWORD_CLIENT_FAILURE action', () => {
    expect(actions.resetPasswordClientFailure()).toEqual({
      type: types.RESET_PASSWORD_CLIENT_FAILURE
    })
  })

  it('should create a RESET_PASSWORD_SERVER_FAILURE action', () => {
    expect(actions.resetPasswordServerFailure()).toEqual({
      type: types.RESET_PASSWORD_SERVER_FAILURE
    })
  })
})
