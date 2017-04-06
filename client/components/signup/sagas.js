import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import endpoints from '../../services/endpoints'
import api from '../../services/api'
import { actions as sessionActions } from '../../data/session'
import { actions as notificationActions } from '../notifications'
import { CREATE_ACCOUNT, CONFIRM_ACCOUNT } from './actionTypes'
import { createAccountFailure, confirmAccountFailure } from './actions'

export function* createAccount({ payload }) {
  const endpoint = endpoints.constant.CREATE_ACCOUNT
  const data = { account: payload }

  try {
    yield call(api.post, { endpoint, data })
    yield put(notificationActions.addNotification('Account aangemaakt. Bevestig via de email.'))
    yield put(push('/'))
  } catch (error) {
    yield put(createAccountFailure(error))
  }
}

export function* watchCreateAccount() {
  yield call(takeLatest, CREATE_ACCOUNT, createAccount)
}

export function* confirmAccount({ payload }) {
  const endpoint = endpoints.constant.CONFIRM_ACCOUNT
  const data = { token: payload }

  try {
    const response = yield call(api.post, { endpoint, data })
    yield put(sessionActions.loginSubmit(response.token))
    yield put(push('/'))
  } catch (error) {
    yield put(confirmAccountFailure(error))
  }
}

export function* watchConfirmAccount() {
  yield call(takeLatest, CONFIRM_ACCOUNT, confirmAccount)
}
