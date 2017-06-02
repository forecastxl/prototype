import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const catchError = createAction(types.CATCH_ERROR)
export const resolveError = createAction(types.RESOLVE_ERROR)
