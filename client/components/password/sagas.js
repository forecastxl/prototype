import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as notificationActions } from '../notifications'
import { RESET_PASSWORD, REQUEST_RESET_PASSWORD } from './actionTypes'
import {
  resetPasswordSuccess,
  resetPasswordFail,
  requestResetPasswordSuccess,
  requestResetPasswordFail
} from './actions'

export function* resetPassword({ payload }) {
  const { data, error } = yield call(post, endpoints.RESET_PASSWORD, { payload })
  if (data) {
    yield put(resetPasswordSuccess())
    yield put(push('/'))
  } else if (error.errors) {
    yield put(resetPasswordFail(error.errors))
  } else {
    yield put(resetPasswordFail(error))
  }
}

export function* watchResetPassword() {
  yield call(takeLatest, RESET_PASSWORD, resetPassword)
}

export function* requestResetPassword({ payload }) {
  const { data, error } = yield call(post, endpoints.REQUEST_RESET_PASSWORD, { email: payload })
  if (data) {
    yield put(requestResetPasswordSuccess(data.token))
    yield put(notificationActions.addNotification('Wachtwoord reset aangevraagd'))
    yield put(push('/login'))
  } else if (error.errors) {
    yield put(requestResetPasswordFail(error.errors))
  } else {
    yield put(requestResetPasswordFail(error))
  }
}

export function* watchRequestResetPassword() {
  yield call(takeLatest, REQUEST_RESET_PASSWORD, requestResetPassword)
}
