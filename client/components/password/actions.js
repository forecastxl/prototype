import * as types from './actionTypes'

export const requestResetPassword = email => ({
  type: types.REQUEST_RESET_PASSWORD,
  email
})

export const requestResetPasswordSuccess = () => ({
  type: types.REQUEST_RESET_PASSWORD_SUCCESS
})

export const requestResetPasswordFail = errors => ({
  type: types.REQUEST_RESET_PASSWORD_FAIL,
  errors
})

export const resetPassword = payload => ({
  type: types.RESET_PASSWORD,
  payload
})

export const resetPasswordSuccess = token => ({
  type: types.RESET_PASSWORD_SUCCESS,
  token
})

export const resetPasswordFail = errors => ({
  type: types.RESET_PASSWORD_FAIL,
  errors
})
