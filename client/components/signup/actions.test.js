import * as types from './actionTypes'
import * as actions from './actions'

describe('actioncreators', () => {
  it('should create a CREATE_ACCOUNT action', () => {
    const account = 'account'
    const actual = actions.createAccount(account)
    const expected = {
      type: types.CREATE_ACCOUNT,
      account
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CREATE_ACCOUNT_SUCCESS action', () => {
    const actual = actions.createAccountSuccess()
    const expected = {
      type: types.CREATE_ACCOUNT_SUCCESS
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CREATE_ACCOUNT_FAIL action', () => {
    const errors = 'errors'
    const actual = actions.createAccountFail(errors)
    const expected = {
      type: types.CREATE_ACCOUNT_FAIL,
      errors
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CONFIRM_ACCOUNT action', () => {
    const token = 'token'
    const actual = actions.confirmAccount(token)
    const expected = {
      type: types.CONFIRM_ACCOUNT,
      token
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CONFIRM_ACCOUNT_SUCCESS action', () => {
    const token = 'token'
    const actual = actions.confirmAccountSuccess(token)
    const expected = {
      type: types.CONFIRM_ACCOUNT_SUCCESS,
      token
    }

    expect(actual).toEqual(expected)
  })

  it('should create a CONFIRM_ACCOUNT_FAIL action', () => {
    const errors = 'errors'
    const actual = actions.confirmAccountFail(errors)
    const expected = {
      type: types.CONFIRM_ACCOUNT_FAIL,
      errors
    }

    expect(actual).toEqual(expected)
  })
})
