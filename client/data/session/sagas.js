import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as actions from './actions'
import * as types from './actionTypes'

export function* createSession({ payload }) {
  const { data, error } = yield call(post, endpoints.CREATE_SESSION, { user: payload })
  if (data) {
    yield put(actions.createSessionSuccess(data.token))
    yield put(push('/'))
  } else if (error.errors) {
    yield put(actions.createSessionFail(error.errors))
  } else {
    yield put(actions.createSessionFail(error))
  }
}

export function* watchCreateSession() {
  yield call(takeLatest, types.CREATE_SESSION, createSession)
}
