import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const addNotification = createAction(types.ADD_NOTIFICATION)
export const removeOldestNotification = createAction(types.REMOVE_OLDEST_NOTIFICATION)
