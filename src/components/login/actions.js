import * as types from './actionTypes'

export const loginUser = payload => ({
  type: types.LOGIN_USER,
  payload
})

export const loginUserSuccess = () => ({
  type: types.LOGIN_USER_SUCCESS
})

export const loginUserFail = () => ({
  type: types.LOGIN_USER_FAIL
})
