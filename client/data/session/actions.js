import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const loginSubmit = createAction(types.LOGIN_SUBMIT)
export const loginSuccess = createAction(types.LOGIN_SUCCESS)
export const loginValidationFailure = createAction(types.LOGIN_VALIDATION_FAILURE)
export const loginClientFailure = createAction(types.LOGIN_CLIENT_FAILURE)
export const loginServerFailure = createAction(types.LOGIN_SERVER_FAILURE)

export const logout = createAction(types.LOGOUT)
