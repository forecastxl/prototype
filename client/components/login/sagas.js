import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as actions from './actions'
import * as types from './actionTypes'

export function* requestPasswordReset(action) {
  const { data, error } = yield call(post, endpoints.FORGOT_PASSWORD_ENDPOINT, action.payload)
  if (data) {
    yield put(actions.requestPasswordResetSuccess(data))
    yield put(push('/login/forgot-password/success'))
  } else {
    yield put(actions.requestPasswordResetFail(error))
  }
}

export function* watchRequestPasswordReset() {
  yield call(takeLatest, types.REQUEST_PASSWORD_RESET, requestPasswordReset)
}

export function* passwordReset(action) {
  const { data, error } = yield call(post, endpoints.RESET_PASSWORD_ENDPOINT, action.payload)
  if (data) {
    yield put(actions.resetPasswordSuccess(data))
  } else {
    yield put(actions.resetPasswordFail(error))
  }
}

export function* watchPasswordReset() {
  yield call(takeLatest, types.RESET_PASSWORD, passwordReset)
}
