import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const loginSubmit = createAction(types.LOGIN_SUBMIT)
export const loginSuccess = createAction(types.LOGIN_SUCCESS)
export const loginFailure = createAction(types.LOGIN_FAILURE)

export const logout = createAction(types.LOGOUT)
