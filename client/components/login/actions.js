import * as types from './actionTypes'

export const requestPasswordReset = payload => ({
  type: types.REQUEST_PASSWORD_RESET,
  payload
})

export const requestPasswordResetSuccess = payload => ({
  type: types.REQUEST_PASSWORD_RESET_SUCCESS,
  payload
})

export const requestPasswordResetFail = payload => ({
  type: types.REQUEST_PASSWORD_RESET_FAIL,
  payload
})

export const resetPassword = payload => ({
  type: types.RESET_PASSWORD,
  payload
})

export const resetPasswordSuccess = payload => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload
})
export const resetPasswordFail = payload => ({
  type: types.RESET_PASSWORD_FAIL,
  payload
})
