import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const createSession = createAction(types.CREATE_SESSION)
export const createSessionSuccess = createAction(types.CREATE_SESSION_SUCCESS)
export const createSessionFailure = createAction(types.CREATE_SESSION_FAILURE)

export const destroySession = createAction(types.DESTROY_SESSION)
