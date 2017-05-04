import { call, put, select, takeLatest } from 'redux-saga/effects'
import { selectors as sessionSelectors } from '../../data/session'
import api from '../../services/api'
import endpoints from '../../services/endpoints'
import * as actions from './actions'
import * as types from './actionTypes'

export function* fetchProfile() {
  const endpoint = endpoints.constant.PROFILE

  try {
    const token = yield select(sessionSelectors.getToken)
    const response = yield call(api.get, { endpoint, token })
    yield put(actions.fetchProfileSuccess(response.data))
  } catch (error) {
    yield put(actions.fetchProfileFailure(error))
  }
}

export function* watchFetchProfile() {
  yield call(takeLatest, types.FETCH_PROFILE, fetchProfile)
}

export function* updateProfile({ payload }) {
  const endpoint = endpoints.dynamic.user(payload.id)
  const data = payload

  try {
    const token = yield select(sessionSelectors.getToken)
    yield call(api.put, { endpoint, data, token })
    yield put(actions.updateProfileSuccess())
  } catch (error) {
    yield put(actions.updateProfileFailure(error))
  }
}

export function* watchUpdateProfile() {
  yield call(takeLatest, types.UPDATE_PROFILE, updateProfile)
}
