import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const fetchProfile = createAction(types.FETCH_PROFILE)
export const fetchProfileSuccess = createAction(types.FETCH_PROFILE_SUCCESS)
export const fetchProfileFail = createAction(types.FETCH_PROFILE_FAIL)

export const updateProfile = createAction(types.UPDATE_PROFILE)
export const updateProfileSuccess = createAction(types.UPDATE_PROFILE_SUCCESS)
export const updateProfileFail = createAction(types.UPDATE_PROFILE_FAIL)
