import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a LOGIN_SUBMIT action', () => {
    expect(actions.loginSubmit()).toEqual({
      type: types.LOGIN_SUBMIT
    })
  })

  it('should create a LOGIN_SUCCESS action', () => {
    expect(actions.loginSuccess()).toEqual({
      type: types.LOGIN_SUCCESS
    })
  })

  it('should create a LOGIN_VALIDATION_FAILURE action', () => {
    expect(actions.loginValidationFailure()).toEqual({
      type: types.LOGIN_VALIDATION_FAILURE
    })
  })

  it('should create a LOGIN_CLIENT_FAILURE action', () => {
    expect(actions.loginClientFailure()).toEqual({
      type: types.LOGIN_CLIENT_FAILURE
    })
  })

  it('should create a LOGIN_SERVER_FAILURE action', () => {
    expect(actions.loginServerFailure()).toEqual({
      type: types.LOGIN_SERVER_FAILURE
    })
  })

  it('should create a LOGOUT action', () => {
    expect(actions.logout()).toEqual({
      type: types.LOGOUT
    })
  })
})
