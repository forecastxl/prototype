import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CREATE_ACCOUNT action', () => {
    expect(actions.createAccount()).toEqual({
      type: types.CREATE_ACCOUNT
    })
  })

  it('should create a CREATE_ACCOUNT_SUCCESS action', () => {
    expect(actions.createAccountSuccess()).toEqual({
      type: types.CREATE_ACCOUNT_SUCCESS
    })
  })

  it('should create a CREATE_ACCOUNT_VALIDATION_FAILURE action', () => {
    expect(actions.createAccountValidationFailure()).toEqual({
      type: types.CREATE_ACCOUNT_VALIDATION_FAILURE
    })
  })

  it('should create a CREATE_ACCOUNT_CLIENT_FAILURE action', () => {
    expect(actions.createAccountClientFailure()).toEqual({
      type: types.CREATE_ACCOUNT_CLIENT_FAILURE
    })
  })

  it('should create a CREATE_ACCOUNT_SERVER_FAILURE action', () => {
    expect(actions.createAccountServerFailure()).toEqual({
      type: types.CREATE_ACCOUNT_SERVER_FAILURE
    })
  })

  it('should create a CONFIRM_ACCOUNT action', () => {
    expect(actions.confirmAccount()).toEqual({
      type: types.CONFIRM_ACCOUNT
    })
  })

  it('should create a CONFIRM_ACCOUNT_SUCCESS action', () => {
    expect(actions.confirmAccountSuccess()).toEqual({
      type: types.CONFIRM_ACCOUNT_SUCCESS
    })
  })

  it('should create a CONFIRM_ACCOUNT_FAILURE action', () => {
    expect(actions.confirmAccountFailure()).toEqual({
      type: types.CONFIRM_ACCOUNT_FAILURE
    })
  })
})
