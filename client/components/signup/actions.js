import * as types from './actionTypes'

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
