import * as types from './actionTypes'

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

export const logout = () => ({
  type: types.LOGOUT
})
