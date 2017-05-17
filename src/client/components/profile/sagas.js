import { call, put, select, takeLatest } from 'redux-saga/effects'
import { selectors as sessionSelectors } from '../../data/session'
import api from '../../services/api'
import endpoints from '../../services/endpoints'
import { FETCH_PROFILE, UPDATE_PROFILE, UPDATE_PASSWORD } from './actionTypes'
import {
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfileSuccess,
  updateProfileValidationFailure,
  updateProfileClientFailure,
  updateProfileServerFailure,
  updatePasswordSuccess,
  updatePasswordValidationFailure,
  updatePasswordClientFailure,
  updatePasswordServerFailure
} from './actions'

export function* fetchProfile() {
  const endpoint = endpoints.constant.PROFILE

  try {
    const token = yield select(sessionSelectors.getToken)
    const response = yield call(api.get, { endpoint, token })
    yield put(fetchProfileSuccess(response.data))
  } catch (error) {
    yield put(fetchProfileFailure(error))
  }
}

export function* watchFetchProfile() {
  yield takeLatest(FETCH_PROFILE, fetchProfile)
}

export function* updateProfile({ payload }) {
  const endpoint = endpoints.dynamic.user(payload.id)
  const data = payload

  try {
    const token = yield select(sessionSelectors.getToken)
    yield call(api.put, { endpoint, data, token })
    yield put(updateProfileSuccess())
  } catch (error) {
    if (error.name === 'SubmissionError') {
      yield put(updateProfileValidationFailure(error.errors))
    } else if (error.name === 'ClientError') {
      yield put(updateProfileClientFailure(error))
    } else {
      yield put(updateProfileServerFailure(error))
    }
  }
}

export function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE, updateProfile)
}

export function* updatePassword({ payload }) {
  const endpoint = endpoints.dynamic.user(payload.id)
  const data = payload

  try {
    const token = yield select(sessionSelectors.getToken)
    yield call(api.put, { endpoint, data, token })
    yield put(updatePasswordSuccess())
  } catch (error) {
    if (error.name === 'SubmissionError') {
      yield put(updatePasswordValidationFailure(error.errors))
    } else if (error.name === 'ClientError') {
      yield put(updatePasswordClientFailure(error))
    } else {
      yield put(updatePasswordServerFailure(error))
    }
  }
}

export function* watchUpdatePassword() {
  yield takeLatest(UPDATE_PASSWORD, updatePassword)
}
