import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const requestResetPassword = createAction(types.REQUEST_RESET_PASSWORD)
export const requestResetPasswordSuccess = createAction(types.REQUEST_RESET_PASSWORD_SUCCESS)
export const requestResetPasswordValidationFailure = createAction(
  types.REQUEST_RESET_PASSWORD_VALIDATION_FAILURE
)
export const requestResetPasswordClientFailure = createAction(
  types.REQUEST_RESET_PASSWORD_CLIENT_FAILURE
)
export const requestResetPasswordServerFailure = createAction(
  types.REQUEST_RESET_PASSWORD_SERVER_FAILURE
)

export const resetPassword = createAction(types.RESET_PASSWORD)
export const resetPasswordSuccess = createAction(types.RESET_PASSWORD_SUCCESS)
export const resetPasswordValidationFailure = createAction(types.RESET_PASSWORD_VALIDATION_FAILURE)
export const resetPasswordClientFailure = createAction(types.RESET_PASSWORD_CLIENT_FAILURE)
export const resetPasswordServerFailure = createAction(types.RESET_PASSWORD_SERVER_FAILURE)
