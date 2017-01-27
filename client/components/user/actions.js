import * as types from './actionTypes'

// confirm newly created account with a token sent via email

export const confirmAccount = token => ({
  type: types.CONFIRM_ACCOUNT,
  fetch: { key: 'confirmAccount', isFetching: true, errors: {} },
  token
})

export const confirmAccountSuccess = () => ({
  type: types.CONFIRM_ACCOUNT_SUCCESS,
  fetch: { key: 'confirmAccount', isFetching: false, errors: {} }
})

export const confirmAccountFail = errors => ({
  type: types.CONFIRM_ACCOUNT_FAIL,
  fetch: { key: 'confirmAccount', isFetching: false, errors }
})

// create a new account with data from a form

export const createAccount = account => ({
  type: types.CREATE_ACCOUNT,
  fetch: { key: 'createAccount', isFetching: true, errors: {} },
  account
})

export const createAccountSuccess = () => ({
  type: types.CREATE_ACCOUNT_SUCCESS,
  fetch: { key: 'createAccount', isFetching: false, errors: {} }
})

export const createAccountFail = errors => ({
  type: types.CREATE_ACCOUNT_FAIL,
  fetch: { key: 'createAccount', isFetching: false, errors }
})

// request a token with userdata

export const login = user => ({
  type: types.LOGIN,
  fetch: { key: 'login', isFetching: true, errors: {} },
  user
})

export const loginSuccess = token => ({
  type: types.LOGIN_SUCCESS,
  fetch: { key: 'login', isFetching: false, errors: {} },
  token
})

export const loginFail = errors => ({
  type: types.LOGIN_FAIL,
  fetch: { key: 'login', isFetching: false, errors }
})

// request a password change, for users who forgot it

export const requestPasswordChange = email => ({
  type: types.REQUEST_PASSWORD_CHANGE,
  fetch: { key: 'requestPasswordChange', isFetching: true, errors: {} },
  email
})

export const requestPasswordChangeSuccess = () => ({
  type: types.REQUEST_PASSWORD_CHANGE_SUCCESS,
  fetch: { key: 'requestPasswordChange', isFetching: false, errors: {} }
})

export const requestPasswordChangeFail = errors => ({
  type: types.REQUEST_PASSWORD_CHANGE_FAIL,
  fetch: { key: 'requestPasswordChange', isFetching: false, errors }
})

// change the existing password and login the user on success

export const changePassword = (passwords, token) => ({
  type: types.CHANGE_PASSWORD,
  fetch: { key: 'changePassword', isFetching: true, errors: {} },
  passwords,
  token
})

export const changePasswordSuccess = token => ({
  type: types.CHANGE_PASSWORD_SUCCESS,
  fetch: { key: 'changePassword', isFetching: false, errors: {} },
  token
})

export const changePasswordFail = errors => ({
  type: types.CHANGE_PASSWORD_FAIL,
  fetch: { key: 'changePassword', isFetching: false, errors }
})
