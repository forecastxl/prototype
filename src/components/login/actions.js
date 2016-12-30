import * as types from './actionTypes'

export const loginUser = payload => ({
  type: types.LOGIN_USER,
  payload
})

export const loginUserSuccess = payload => ({
  type: types.LOGIN_USER_SUCCESS,
  payload
})

export const loginUserFail = () => ({
  type: types.LOGIN_USER_FAIL
})
