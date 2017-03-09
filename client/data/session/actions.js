import * as types from './actionTypes'

export const createSession = token => ({
  type: types.CREATE_SESSION,
  token
})

export const destroySession = () => ({
  type: types.DESTROY_SESSION
})
