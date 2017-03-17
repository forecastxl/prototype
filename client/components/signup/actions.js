import * as types from './actionTypes'

export const createAccount = account => ({
  type: types.CREATE_ACCOUNT,
  account
})

export const createAccountSuccess = () => ({
  type: types.CREATE_ACCOUNT_SUCCESS
})

export const createAccountFail = errors => ({
  type: types.CREATE_ACCOUNT_FAIL,
  errors
})

export const confirmAccount = token => ({
  type: types.CONFIRM_ACCOUNT,
  token
})

export const confirmAccountSuccess = token => ({
  type: types.CONFIRM_ACCOUNT_SUCCESS,
  token
})

export const confirmAccountFail = errors => ({
  type: types.CONFIRM_ACCOUNT_FAIL,
  errors
})
