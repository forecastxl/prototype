import * as types from './actionTypes'

export const confirmAccount = payload => ({
  type: types.CONFIRM_ACCOUNT,
  payload
})

export const confirmAccountSuccess = () => ({
  type: types.CONFIRM_ACCOUNT_SUCCESS
})

export const confirmAccountFail = payload => ({
  type: types.CONFIRM_ACCOUNT_FAIL,
  payload
})

export const requestAccount = payload => ({
  type: types.REQUEST_ACCOUNT,
  payload
})

export const requestAccountSuccess = payload => ({
  type: types.REQUEST_ACCOUNT_SUCCESS,
  payload
})

export const requestAccountFail = payload => ({
  type: types.REQUEST_ACCOUNT_FAIL,
  payload
})
