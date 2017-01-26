import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import { actions as session } from '../../data/session'
import * as actions from './actions'
import * as types from './actionTypes'

export function* requestAccount(action) {
  const { data, error } = yield call(post, endpoints.SIGNUP_ENDPOINT, action.payload)
  if (data) {
    yield put(actions.requestAccountSuccess(data))
    yield put(push('/signup/success'))
  } else {
    yield put(actions.requestAccountFail(error))
  }
}

export function* watchRequestAccount() {
  yield call(takeLatest, types.REQUEST_ACCOUNT, requestAccount)
}

export function* confirmAccount(action) {
  const { data, error } = yield call(post, endpoints.CONFIRM_ENDPOINT, action.payload)
  if (data) {
    yield put(actions.confirmAccountSuccess())
    yield put(session.receiveToken(data))
    yield put(push('/home'))
  } else {
    yield put(actions.confirmAccountFail(error))
  }
}

export function* watchConfirmAccount() {
  yield call(takeLatest, types.CONFIRM_ACCOUNT, confirmAccount)
}
