import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as sessionActions } from '../../data/session'
import { actions as notificationActions } from '../notifications'
import { CREATE_ACCOUNT, CONFIRM_ACCOUNT } from './actionTypes'
import { createAccountFail, confirmAccountFail } from './actions'

export function* createAccount(action) {
  const { data, error } = yield call(post, endpoints.CREATE_ACCOUNT, action.account)
  if (data) {
    yield put(notificationActions.addNotification('Account aangemaakt. Bevestig via de email.'))
    yield put(push('/'))
  } else if (error.errors) {
    yield put(createAccountFail(error.errors))
  } else {
    yield put(createAccountFail(error))
  }
}

export function* watchCreateAccount() {
  yield call(takeLatest, CREATE_ACCOUNT, createAccount)
}

export function* confirmAccount(action) {
  const { data, error } = yield call(post, endpoints.CONFIRM_ACCOUNT, action.token)
  if (data) {
    yield put(sessionActions.createSession(data.token))
    yield put(push('/'))
  } else if (error.errors) {
    yield put(confirmAccountFail(error.errors))
  } else {
    yield put(confirmAccountFail(error))
  }
}

export function* watchConfirmAccount() {
  yield call(takeLatest, CONFIRM_ACCOUNT, confirmAccount)
}
