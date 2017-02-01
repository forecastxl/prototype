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

export const requestPasswordChange = email => ({
  type: types.REQUEST_PASSWORD_CHANGE,
  api: { key: 'requestPasswordChange', isFetching: true, errors: {} },
  email
})

export const requestPasswordChangeSuccess = () => ({
  type: types.REQUEST_PASSWORD_CHANGE_SUCCESS,
  api: { key: 'requestPasswordChange', isFetching: false, errors: {} }
})

export const requestPasswordChangeFail = errors => ({
  type: types.REQUEST_PASSWORD_CHANGE_FAIL,
  api: { key: 'requestPasswordChange', isFetching: false, errors }
})

// change the existing password and login the user on success

export const changePassword = (passwords, token) => ({
  type: types.CHANGE_PASSWORD,
  api: { key: 'changePassword', isFetching: true, errors: {} },
  passwords,
  token
})

export const changePasswordSuccess = token => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
  api: { key: 'changePassword', isFetching: false, errors: {} },
  token
})

export const changePasswordFail = errors => ({
  type: types.CHANGE_PASSWORD_FAIL,
  api: { key: 'changePassword', isFetching: false, errors }
})
