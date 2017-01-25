import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
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
