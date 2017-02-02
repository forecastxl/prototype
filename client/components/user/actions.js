import * as types from './actionTypes'

// confirm newly created account with a token sent via email

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

// create a new account with data from a form

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

// request a token with userdata

export const login = user => ({
  type: types.LOGIN,
  api: { key: types.LOGIN, isFetching: true, errors: {} },
  user
})

export const loginSuccess = token => ({
  type: types.LOGIN_SUCCESS,
  api: { key: types.LOGIN, isFetching: false, errors: {} },
  token
})

export const loginFail = errors => ({
  type: types.LOGIN_FAIL,
  api: { key: types.LOGIN, isFetching: false, errors }
})

// destroy the current token

export const logout = () => ({
  type: types.LOGOUT
})

// request a password change, for users who forgot it

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

// change the existing password and login the user on success

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
