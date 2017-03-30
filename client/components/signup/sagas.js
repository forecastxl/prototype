import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as sessionActions } from '../../data/session'
import { actions as notificationActions } from '../notifications'
import { CREATE_ACCOUNT, CONFIRM_ACCOUNT } from './actionTypes'
import { createAccountFailure, confirmAccountFailure } from './actions'

export function* createAccount({ payload }) {
  const { data, error } = yield call(post, endpoints.CREATE_ACCOUNT, { account: payload })
  if (data) {
    yield put(notificationActions.addNotification('Account aangemaakt. Bevestig via de email.'))
    yield put(push('/'))
  } else if (error.errors) {
    yield put(createAccountFailure(error.errors))
  } else {
    yield put(createAccountFailure(error))
  }
}

export function* watchCreateAccount() {
  yield call(takeLatest, CREATE_ACCOUNT, createAccount)
}

export function* confirmAccount({ payload }) {
  const { data, error } = yield call(post, endpoints.CONFIRM_ACCOUNT, { token: payload })
  if (data) {
    yield put(sessionActions.loginSubmit(data.token))
    yield put(push('/'))
  } else if (error.errors) {
    yield put(confirmAccountFailure(error.errors))
  } else {
    yield put(confirmAccountFailure(error))
  }
}

export function* watchConfirmAccount() {
  yield call(takeLatest, CONFIRM_ACCOUNT, confirmAccount)
}
