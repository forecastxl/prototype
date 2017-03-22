import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const createAccount = createAction(types.CREATE_ACCOUNT)
export const createAccountSuccess = createAction(types.CREATE_ACCOUNT_SUCCESS)
export const createAccountFail = createAction(types.CREATE_ACCOUNT_FAIL)

export const confirmAccount = createAction(types.CONFIRM_ACCOUNT)
export const confirmAccountSuccess = createAction(types.CONFIRM_ACCOUNT_SUCCESS)
export const confirmAccountFail = createAction(types.CONFIRM_ACCOUNT_FAIL)
