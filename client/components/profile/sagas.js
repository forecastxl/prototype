import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import get from '../../services/get'
import post from '../../services/post'
import { endpoints } from '../../services/endpoints'
import { actions as fetchActions } from '../../data/fetch'
import * as actions from './actions'
import * as types from './actionTypes'

export function* fetchProfile(action) {
  const { data, error } = yield call(get, endpoints.PROFILE, action.token)
  if (data) {
    yield put(actions.fetchProfileSuccess(data.data))
  } else if (error.errors) {
    yield put(actions.fetchProfileFail(error.errors))
  } else {
    yield put(fetchActions.fetchFail(error.message))
  }
}

export function* watchFetchProfile() {
  yield call(takeLatest, types.FETCH_PROFILE, fetchProfile)
}

export function* updateProfile(action) {
  const postData = { token: action.token, profile: action.profile }
  const { data, error } = yield call(post, endpoints.user(action.profile.id), postData)
  if (data) {
    yield put(actions.updateProfileSuccess())
  } else if (error.errors) {
    yield put(actions.updateProfileFail(error.errors))
  } else {
    yield put(fetchActions.fetchFail(error.message))
  }
}

export function* watchUpdateProfile() {
  yield call(takeLatest, types.UPDATE_PROFILE, updateProfile)
}
