import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import { endpoints } from '../../services/endpoints'
import post from '../../services/post'
import * as actions from './actions'
import * as types from './actionTypes'

export function* requestToken(action) {
  const { data, error } = yield call(post, endpoints.LOGIN_ENDPOINT, action.payload)
  if (data) {
    yield put(actions.requestTokenSuccess(data))
    yield put(push('/home'))
  } else {
    yield put(actions.requestTokenFail(error))
  }
}

export function* watchRequestToken() {
  yield call(takeLatest, types.REQUEST_TOKEN, requestToken)
}
