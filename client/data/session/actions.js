import * as types from './actionTypes'

export const createSession = user => ({
  type: types.CREATE_SESSION,
  user
})

export const createSessionSuccess = token => ({
  type: types.CREATE_SESSION_SUCCESS,
  token
})

export const createSessionFail = errors => ({
  type: types.CREATE_SESSION_FAIL,
  errors
})

export const destroySession = () => ({
  type: types.DESTROY_SESSION
})
