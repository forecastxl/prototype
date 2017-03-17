import * as types from './actionTypes'

export const fetchProfile = () => ({
  type: types.FETCH_PROFILE,
  includeToken: true
})

export const fetchProfileSuccess = data => ({
  type: types.FETCH_PROFILE_SUCCESS,
  data
})

export const fetchProfileFail = errors => ({
  type: types.FETCH_PROFILE_FAIL,
  errors
})

export const updateProfile = user => ({
  type: types.UPDATE_PROFILE,
  includeToken: true,
  user
})

export const updateProfileSuccess = () => ({
  type: types.UPDATE_PROFILE_SUCCESS
})

export const updateProfileFail = errors => ({
  type: types.UPDATE_PROFILE_FAIL,
  errors
})
