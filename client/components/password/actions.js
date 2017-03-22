import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const requestResetPassword = createAction(types.REQUEST_RESET_PASSWORD)
export const requestResetPasswordSuccess = createAction(types.REQUEST_RESET_PASSWORD_SUCCESS)
export const requestResetPasswordFail = createAction(types.REQUEST_RESET_PASSWORD_FAIL)

export const resetPassword = createAction(types.RESET_PASSWORD)
export const resetPasswordSuccess = createAction(types.RESET_PASSWORD_SUCCESS)
export const resetPasswordFail = createAction(types.RESET_PASSWORD_FAIL)
