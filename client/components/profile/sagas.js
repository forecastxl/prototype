import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import get from '../../services/get'
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
