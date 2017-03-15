import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as fetchActions } from '../../data/fetch'
import { actions as notificationActions } from '../notifications'
import { RESET_PASSWORD, REQUEST_RESET_PASSWORD } from './actionTypes'
import {
  resetPasswordSuccess,
  resetPasswordFail,
  requestResetPasswordSuccess,
  requestResetPasswordFail
} from './actions'

export function* resetPassword(action) {
  const { data, error } = yield call(post, endpoints.RESET_PASSWORD, action.payload)
  if (data) {
    yield put(resetPasswordSuccess(data.token))
    yield put(push('/'))
  } else if (error.errors) {
    yield put(resetPasswordFail(error.errors))
  } else {
    yield put(fetchActions.fetchFail(error.message))
  }
}

export function* watchResetPassword() {
  yield call(takeLatest, RESET_PASSWORD, resetPassword)
}

export function* requestResetPassword(action) {
  const email = action.email
  const { data, error } = yield call(post, endpoints.REQUEST_RESET_PASSWORD, { email })
  if (data) {
    yield put(requestResetPasswordSuccess())
    yield put(notificationActions.addNotification('Wachtwoord reset aangevraagd'))
    yield put(push('/login'))
  } else if (error.errors) {
    yield put(requestResetPasswordFail(error.errors))
  } else {
    yield put(fetchActions.fetchFail(error.message))
  }
}

export function* watchRequestResetPassword() {
  yield call(takeLatest, REQUEST_RESET_PASSWORD, requestResetPassword)
}
