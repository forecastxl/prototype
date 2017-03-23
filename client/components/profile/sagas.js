import { call, put, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { selectors as sessionSelectors } from '../../data/session'
import get from '../../services/get'
import putService from '../../services/put'
import { endpoints } from '../../services/endpoints'
import * as actions from './actions'
import * as types from './actionTypes'

export function* fetchProfile() {
  const token = yield select(sessionSelectors.getToken)
  const { data, error } = yield call(get, endpoints.PROFILE, token)
  if (data) {
    yield put(actions.fetchProfileSuccess(data.data))
  } else if (error.errors) {
    yield put(actions.fetchProfileFail(error.errors))
  } else {
    yield put(actions.fetchProfileFail(error))
  }
}

export function* watchFetchProfile() {
  yield call(takeLatest, types.FETCH_PROFILE, fetchProfile)
}

export function* updateProfile({ payload }) {
  const token = yield select(sessionSelectors.getToken)
  const { data, error } = yield call(putService, endpoints.user(payload.id), payload, token)
  if (data) {
    yield put(actions.updateProfileSuccess())
  } else if (error.errors) {
    yield put(actions.updateProfileFail(error.errors))
  } else {
    yield put(actions.updateProfileFail(error))
  }
}

export function* watchUpdateProfile() {
  yield call(takeLatest, types.UPDATE_PROFILE, updateProfile)
}
