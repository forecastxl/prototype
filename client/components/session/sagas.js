import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { takeLatest } from 'redux-saga'
import Api, { endpoints } from '../../services/api'
import * as actions from './actions'
import * as types from './actionTypes'

export function* loginUser(action) {
  const { data, error } = yield call(Api.post, endpoints.LOGIN_ENDPOINT, action.payload)
  if (data) {
    yield put(actions.loginUserSuccess(data))
    yield put(push('/home'))
  } else {
    yield put(actions.loginUserFail(error))
  }
}

export function* watchLoginUser() {
  yield call(takeLatest, types.LOGIN_USER, loginUser)
}
