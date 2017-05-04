import { push } from 'connected-react-router'
import { call, put, takeLatest } from 'redux-saga/effects'
import { actions as notificationActions } from '../notifications'
import endpoints from '../../services/endpoints'
import api from '../../services/api'
import { RESET_PASSWORD, REQUEST_RESET_PASSWORD } from './actionTypes'
import {
  resetPasswordSuccess,
  resetPasswordFailure,
  requestResetPasswordSuccess,
  requestResetPasswordFailure
} from './actions'

export function* resetPassword({ payload }) {
  const endpoint = endpoints.constant.RESET_PASSWORD
  const data = payload

  try {
    yield call(api.post, { endpoint, data })
    yield put(resetPasswordSuccess())
    yield put(push('/'))
  } catch (error) {
    yield put(resetPasswordFailure(error))
  }
}

export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPassword)
}

export function* requestResetPassword({ payload }) {
  const endpoint = endpoints.constant.REQUEST_RESET_PASSWORD
  const data = { email: payload }

  try {
    const response = yield call(api.post, { endpoint, data })
    yield put(requestResetPasswordSuccess(response.token))
    yield put(
      notificationActions.addNotification({
        level: 'success',
        options: { title: 'title', message: 'message' }
      })
    )
    yield put(push('/login'))
  } catch (error) {
    yield put(requestResetPasswordFailure(error))
  }
}

export function* watchRequestResetPassword() {
  yield takeLatest(REQUEST_RESET_PASSWORD, requestResetPassword)
}
