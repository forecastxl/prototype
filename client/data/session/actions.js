import * as types from './actionTypes'

export const requestToken = payload => ({
  type: types.REQUEST_TOKEN,
  payload
})

export const requestTokenSuccess = payload => ({
  type: types.REQUEST_TOKEN_SUCCESS,
  payload
})

export const requestTokenFail = payload => ({
  type: types.REQUEST_TOKEN_FAIL,
  payload
})

export const destroyToken = () => ({
  type: types.DESTROY_TOKEN
})
