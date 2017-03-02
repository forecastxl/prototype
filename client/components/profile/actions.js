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

export const updateProfile = user => ({
  type: types.UPDATE_PROFILE,
  api: { key: types.UPDATE_PROFILE, isFetching: true, errors: {} },
  includeToken: true,
  user
})

export const updateProfileSuccess = () => ({
  type: types.UPDATE_PROFILE_SUCCESS,
  api: { key: types.UPDATE_PROFILE, isFetching: false, errors: {} }
})

export const updateProfileFail = errors => ({
  type: types.UPDATE_PROFILE_FAIL,
  api: { key: types.UPDATE_PROFILE, isFetching: false, errors }
})

export const updatePassword = passwords => ({
  type: types.UPDATE_PASSWORD,
  api: { key: types.UPDATE_PASSWORD, isFetching: true, errors: {} },
  includeToken: true,
  passwords
})

export const updatePasswordSuccess = () => ({
  type: types.UPDATE_PASSWORD_SUCCESS,
  api: { key: types.UPDATE_PASSWORD, isFetching: false, errors: {} }
})

export const updatePasswordFail = errors => ({
  type: types.UPDATE_PASSWORD_FAIL,
  api: { key: types.UPDATE_PASSWORD, isFetching: false, errors }
})
