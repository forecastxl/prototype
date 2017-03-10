import * as types from './actionTypes'

export const requestResetPassword = email => ({
  type: types.REQUEST_RESET_PASSWORD,
  api: { key: types.REQUEST_RESET_PASSWORD, isFetching: true, errors: {} },
  email
})

export const requestResetPasswordSuccess = () => ({
  type: types.REQUEST_RESET_PASSWORD_SUCCESS,
  api: { key: types.REQUEST_RESET_PASSWORD, isFetching: false, errors: {} }
})

export const requestResetPasswordFail = errors => ({
  type: types.REQUEST_RESET_PASSWORD_FAIL,
  api: { key: types.REQUEST_RESET_PASSWORD, isFetching: false, errors }
})

export const resetPassword = payload => ({
  type: types.RESET_PASSWORD,
  api: { key: types.RESET_PASSWORD, isFetching: true, errors: {} },
  payload
})

export const resetPasswordSuccess = token => ({
  type: types.RESET_PASSWORD_SUCCESS,
  api: { key: types.RESET_PASSWORD, isFetching: false, errors: {} },
  token
})

export const resetPasswordFail = errors => ({
  type: types.RESET_PASSWORD_FAIL,
  api: { key: types.RESET_PASSWORD, isFetching: false, errors }
})
