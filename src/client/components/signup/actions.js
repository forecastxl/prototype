import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const createAccount = createAction(types.CREATE_ACCOUNT)
export const createAccountSuccess = createAction(types.CREATE_ACCOUNT_SUCCESS)
export const createAccountValidationFailure = createAction(types.CREATE_ACCOUNT_VALIDATION_FAILURE)
export const createAccountClientFailure = createAction(types.CREATE_ACCOUNT_CLIENT_FAILURE)
export const createAccountServerFailure = createAction(types.CREATE_ACCOUNT_SERVER_FAILURE)

export const confirmAccount = createAction(types.CONFIRM_ACCOUNT)
export const confirmAccountSuccess = createAction(types.CONFIRM_ACCOUNT_SUCCESS)
export const confirmAccountFailure = createAction(types.CONFIRM_ACCOUNT_FAILURE)
