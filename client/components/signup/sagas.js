import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import Api, { endpoints } from '../../services/api'
import * as actions from './actions'
import * as types from './actionTypes'

export function* requestAccount(action) {
  const { data, error } = yield call(Api.post, endpoints.SIGNUP_ENDPOINT, action.payload)
  if (data) {
    yield put(actions.requestAccountSuccess(data))
    yield put(push('/login'))
  } else {
    yield put(actions.requestAccountFail(error))
  }
}

export function* watchRequestAccount() {
  yield call(takeLatest, types.REQUEST_ACCOUNT, requestAccount)
}
