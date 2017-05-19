import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const fetchProfile = createAction(types.FETCH_PROFILE)
export const fetchProfileSuccess = createAction(types.FETCH_PROFILE_SUCCESS)
export const fetchProfileFailure = createAction(types.FETCH_PROFILE_FAILURE)

export const updateProfile = createAction(types.UPDATE_PROFILE)
export const updateProfileSuccess = createAction(types.UPDATE_PROFILE_SUCCESS)
export const updateProfileValidationFailure = createAction(types.UPDATE_PROFILE_VALIDATION_FAILURE)
export const updateProfileClientFailure = createAction(types.UPDATE_PROFILE_CLIENT_FAILURE)
export const updateProfileServerFailure = createAction(types.UPDATE_PROFILE_SERVER_FAILURE)

export const updatePassword = createAction(types.UPDATE_PASSWORD)
export const updatePasswordSuccess = createAction(types.UPDATE_PASSWORD_SUCCESS)
export const updatePasswordValidationFailure = createAction(
  types.UPDATE_PASSWORD_VALIDATION_FAILURE
)
export const updatePasswordClientFailure = createAction(types.UPDATE_PASSWORD_CLIENT_FAILURE)
export const updatePasswordServerFailure = createAction(types.UPDATE_PASSWORD_SERVER_FAILURE)
