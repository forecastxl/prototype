import * as types from './actionTypes'

export const confirmAccount = token => ({
  type: types.CONFIRM_ACCOUNT,
  api: { key: types.CONFIRM_ACCOUNT, isFetching: true, errors: {} },
  token
})

export const confirmAccountSuccess = token => ({
  type: types.CONFIRM_ACCOUNT_SUCCESS,
  api: { key: types.CONFIRM_ACCOUNT, isFetching: false, errors: {} },
  token
})

export const confirmAccountFail = errors => ({
  type: types.CONFIRM_ACCOUNT_FAIL,
  api: { key: types.CONFIRM_ACCOUNT, isFetching: false, errors }
})

export const createAccount = account => ({
  type: types.CREATE_ACCOUNT,
  api: { key: types.CREATE_ACCOUNT, isFetching: true, errors: {} },
  account
})

export const createAccountSuccess = () => ({
  type: types.CREATE_ACCOUNT_SUCCESS,
  api: { key: types.CREATE_ACCOUNT, isFetching: false, errors: {} }
})

export const createAccountFail = errors => ({
  type: types.CREATE_ACCOUNT_FAIL,
  api: { key: types.CREATE_ACCOUNT, isFetching: false, errors }
})
