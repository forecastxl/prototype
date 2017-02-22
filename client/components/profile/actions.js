import * as types from './actionTypes'

export const fetchProfile = () => ({
  type: types.FETCH_PROFILE,
  api: { key: types.FETCH_PROFILE, isFetching: true, errors: {} },
  includeToken: true
})

export const fetchProfileSuccess = data => ({
  type: types.FETCH_PROFILE_SUCCESS,
  api: { key: types.FETCH_PROFILE, isFetching: false, errors: {} },
  data
})

export const fetchProfileFail = errors => ({
  type: types.FETCH_PROFILE_FAIL,
  api: { key: types.FETCH_PROFILE, isFetching: false, errors }
})

export const updateProfile = profile => ({
  type: types.UPDATE_PROFILE,
  api: { key: types.UPDATE_PROFILE, isFetching: true, errors: {} },
  includeToken: true,
  profile
})

export const updateProfileSuccess = () => ({
  type: types.UPDATE_PROFILE_SUCCESS,
  api: { key: types.UPDATE_PROFILE, isFetching: false, errors: {} }
})

export const updateProfileFail = errors => ({
  type: types.UPDATE_PROFILE_FAIL,
  api: { key: types.UPDATE_PROFILE, isFetching: false, errors }
})
