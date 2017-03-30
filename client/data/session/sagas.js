import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as actions from './actions'
import * as types from './actionTypes'

export function* login({ payload }) {
  const { data, error } = yield call(post, endpoints.LOGIN, { user: payload })
  if (data) {
    yield put(actions.loginSuccess(data.token))
    yield put(push('/'))
  } else if (error.validationErrors) {
    yield put(actions.loginFailure(error.validationErrors))
  } else {
    yield put(actions.loginFailure(error))
  }
}

export function* watchLoginSubmit() {
  yield call(takeLatest, types.LOGIN_SUBMIT, login)
}
