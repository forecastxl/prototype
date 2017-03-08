import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import get from '../../services/get'
import putService from '../../services/put'
import { endpoints } from '../../services/endpoints'
import { actions as fetchActions } from '../../data/fetch'
import * as actions from './actions'
import * as types from './actionTypes'

export function* fetchProfile({ token }) {
  const { data, error } = yield call(get, endpoints.PROFILE, token)
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

export function* updateProfile({ user, token }) {
  const { data, error } = yield call(putService, endpoints.user(user.id), user, token)
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

export function* updatePassword({ user, token }) {
  const { data, error } = yield call(putService, endpoints.user(user.id), user, token)
  if (data) {
    yield put(actions.updatePasswordSuccess())
  } else if (error.errors) {
    yield put(actions.updatePasswordFail(error.errors))
  } else {
    yield put(fetchActions.fetchFail(error.message))
  }
}

export function* watchUpdatePassword() {
  yield call(takeLatest, types.UPDATE_PASSWORD, updatePassword)
}
