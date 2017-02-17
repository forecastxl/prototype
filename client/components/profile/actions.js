import * as types from './actionTypes'

export const fetchProfile = () => ({
  type: types.FETCH_PROFILE,
  api: { key: types.FETCH_PROFILE, isFetching: true, errors: {} },
  includeToken: true
})

export const fetchProfileSuccess = token => ({
  type: types.FETCH_PROFILE_SUCCESS,
  api: { key: types.FETCH_PROFILE, isFetching: false, errors: {} },
  token
})

export const fetchProfileFail = errors => ({
  type: types.FETCH_PROFILE_FAIL,
  api: { key: types.FETCH_PROFILE, isFetching: false, errors }
})
